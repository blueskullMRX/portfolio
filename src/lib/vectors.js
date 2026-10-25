// Small, dependency-free text-vector toolkit used by the retrieval demo and the project map.
// TF-IDF with sublinear term frequency, L2-normalised; cosine similarity; PCA via power iteration.

const STOP = new Set(
  "a an and are as at be by for from has have he her his i in into is it its me my of on or our she so that the their them they this to was we were what when where which who why will with you your do does did can could about how there than then also any all not no yes only just more most very over under using use used built build".split(" ")
);

const SYNONYMS = {
  rag: ["retrieval", "augmented", "generation", "qdrant", "embeddings"],
  llm: ["llm", "openai", "language", "model", "prompt"],
  llms: ["llm"],
  gpt: ["openai", "llm"],
  ai: ["ai", "llm", "machine", "learning"],
  genai: ["llm", "generative"],
  nlp: ["nlp", "language", "bert", "chatbot"],
  bigdata: ["kafka", "spark", "streaming"],
  big: ["kafka", "spark"],
  streaming: ["kafka", "spark", "streaming", "real-time"],
  realtime: ["real-time", "streaming"],
  vision: ["cnn", "opencv", "image", "facial"],
  cv: ["cnn", "opencv", "image"],
  image: ["cnn", "opencv", "facial"],
  deep: ["cnn", "tensorflow", "pytorch", "keras"],
  cloud: ["azure", "aws", "databricks"],
  mlops: ["docker", "prometheus", "grafana", "monitored", "deployment"],
  deploy: ["docker", "deployment", "fastapi", "prometheus"],
  deployment: ["docker", "prometheus", "grafana"],
  contact: ["email", "phone", "linkedin"],
  reach: ["email", "phone", "linkedin"],
  email: ["email"],
  hire: ["email", "role", "seeking"],
  available: ["seeking", "role"],
  where: ["tangier", "morocco", "location", "based"],
  located: ["tangier", "morocco"],
  location: ["tangier", "morocco"],
  speak: ["arabic", "english", "french", "languages"],
  language: ["arabic", "english", "french", "languages"],
  languages: ["arabic", "english", "french"],
  study: ["master", "bachelor", "degree", "faculty"],
  studied: ["master", "bachelor", "degree"],
  education: ["master", "bachelor", "degree", "faculty"],
  degree: ["master", "bachelor"],
  university: ["faculty", "master"],
  health: ["healthcare", "sehatoka", "diagnosis", "patient"],
  healthcare: ["sehatoka", "diagnosis", "patient", "clinical"],
  medical: ["healthcare", "diagnosis", "patient", "parkinson"],
  blockchain: ["hyperledger", "fabric", "chaincode", "ledger"],
  test: ["junit", "tests", "testing"],
  testing: ["junit", "tests"],
  java: ["java", "spring", "junit", "javaparser"],
  intern: ["internship", "intern"],
  internship: ["intern", "ntt"],
  experience: ["intern", "engineer", "developer"],
  work: ["engineer", "intern", "developer"],
  job: ["engineer", "intern", "developer"],
  vector: ["qdrant", "embeddings", "semantic"],
  database: ["qdrant", "postgresql", "mongodb", "mysql"],
  teams: ["microsoft", "teams", "sharepoint"],
  microsoft: ["teams", "azure", "sharepoint"],
  sentiment: ["sentiment", "reviews", "mllib"],
  emotion: ["emotion", "facial", "cnn"],
  python: ["python"],
};

export function stem(w) {
  if (w.length > 5 && w.endsWith("ing")) return w.slice(0, -3);
  if (w.length > 4 && w.endsWith("ies")) return w.slice(0, -3) + "y";
  if (w.length > 4 && w.endsWith("ed")) return w.slice(0, -2);
  if (w.length > 3 && w.endsWith("s") && !w.endsWith("ss")) return w.slice(0, -1);
  return w;
}

export function tokenize(text) {
  return (text.toLowerCase().match(/[a-z0-9][a-z0-9+#.-]*[a-z0-9+#]|[a-z0-9]/g) || [])
    .filter((t) => !STOP.has(t))
    .map(stem);
}

export function expandQuery(text) {
  const raw = (text.toLowerCase().match(/[a-z0-9][a-z0-9+#.-]*[a-z0-9+#]|[a-z0-9]/g) || []).filter((t) => !STOP.has(t));
  const out = [];
  for (const t of raw) {
    out.push(stem(t));
    for (const s of SYNONYMS[t] || []) out.push(stem(s));
  }
  return out;
}

export function buildIndex(docs) {
  const tokenized = docs.map((d) => tokenize(d));
  const df = new Map();
  tokenized.forEach((toks) => new Set(toks).forEach((t) => df.set(t, (df.get(t) || 0) + 1)));
  const vocab = [...df.keys()].sort();
  const vIndex = new Map(vocab.map((t, i) => [t, i]));
  const N = docs.length;
  const idf = vocab.map((t) => Math.log((1 + N) / (1 + df.get(t))) + 1);
  const vectorize = (toks) => {
    const tf = new Map();
    toks.forEach((t) => vIndex.has(t) && tf.set(t, (tf.get(t) || 0) + 1));
    const v = new Map();
    let norm = 0;
    tf.forEach((c, t) => {
      const i = vIndex.get(t);
      const w = (1 + Math.log(c)) * idf[i];
      v.set(i, w);
      norm += w * w;
    });
    norm = Math.sqrt(norm) || 1;
    v.forEach((w, i) => v.set(i, w / norm));
    return v;
  };
  const vectors = tokenized.map(vectorize);
  return { vocab, idf, vectors, tokenized, vectorize };
}

export function cosine(a, b) {
  let s = 0;
  const [small, big] = a.size < b.size ? [a, b] : [b, a];
  small.forEach((w, i) => {
    const o = big.get(i);
    if (o) s += w * o;
  });
  return s;
}

// PCA to 2D on sparse unit vectors. Returns coords and explained variance ratios.
export function pca2(vectors, dims) {
  const n = vectors.length;
  const X = vectors.map((v) => {
    const row = new Float64Array(dims);
    v.forEach((w, i) => (row[i] = w));
    return row;
  });
  const mean = new Float64Array(dims);
  X.forEach((r) => r.forEach((x, j) => (mean[j] += x / n)));
  X.forEach((r) => r.forEach((x, j) => (r[j] = x - mean[j])));
  // Work in sample space (n x n Gram matrix) since n << dims.
  const G = Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, k) => {
      let s = 0;
      for (let j = 0; j < dims; j++) s += X[i][j] * X[k][j];
      return s;
    })
  );
  const total = G.reduce((s, row, i) => s + row[i], 0);
  const comps = [];
  const eig = [];
  for (let c = 0; c < 2; c++) {
    let v = Array.from({ length: n }, (_, i) => Math.sin(i + 1 + c * 7));
    let lambda = 0;
    for (let it = 0; it < 300; it++) {
      const w = G.map((row) => row.reduce((s, g, k) => s + g * v[k], 0));
      comps.forEach((u) => {
        const d = w.reduce((s, x, k) => s + x * u[k], 0);
        for (let k = 0; k < n; k++) w[k] -= d * u[k];
      });
      const nrm = Math.sqrt(w.reduce((s, x) => s + x * x, 0)) || 1;
      lambda = nrm;
      v = w.map((x) => x / nrm);
    }
    comps.push(v);
    eig.push(lambda);
  }
  const coords = Array.from({ length: n }, (_, i) => [comps[0][i] * Math.sqrt(eig[0]), comps[1][i] * Math.sqrt(eig[1])]);
  return { coords, explained: eig.map((e) => e / total) };
}
