const skills = [
  // Programming
  { title: 'Python', competency: 5, category: ['Programming'] },
  { title: 'C++', competency: 5, category: ['Programming'] },
  { title: 'Java', competency: 4, category: ['Programming'] },
  { title: 'JavaScript', competency: 4, category: ['Programming'] },

  // ML & NLP
  { title: 'PyTorch', competency: 5, category: ['ML & NLP'] },
  { title: 'TensorFlow', competency: 5, category: ['ML & NLP'] },
  { title: 'scikit-learn', competency: 5, category: ['ML & NLP'] },
  { title: 'Transformers (HuggingFace)', competency: 5, category: ['ML & NLP'] },
  { title: 'GNN / Graph Learning', competency: 4, category: ['ML & NLP'] },

  // Language Models
  { title: 'BERT / RoBERTa', competency: 5, category: ['Language Models'] },
  { title: 'T5 / BART', competency: 4, category: ['Language Models'] },
  { title: 'LLaMA', competency: 4, category: ['Language Models'] },

  // LLM Systems
  { title: 'Fine-tuning LLMs', competency: 5, category: ['LLM Systems'] },
  { title: 'RAG Pipelines', competency: 5, category: ['LLM Systems'] },
  { title: 'Semantic Search', competency: 5, category: ['LLM Systems'] },
  { title: 'Speech-to-Text (Whisper)', competency: 4, category: ['LLM Systems'] },
  { title: 'Summarization & Classification', competency: 5, category: ['LLM Systems'] },

  // Infrastructure & MLOps
  { title: 'AWS', competency: 4, category: ['Infrastructure'] },
  { title: 'Azure', competency: 4, category: ['Infrastructure'] },
  { title: 'Docker', competency: 5, category: ['Infrastructure'] },
  { title: 'GPU Optimization', competency: 5, category: ['Infrastructure'] },
  { title: 'Linux', competency: 5, category: ['Infrastructure'] },
  { title: 'Git', competency: 5, category: ['Infrastructure'] },

  // Data & Analytics
  { title: 'SQL', competency: 5, category: ['Data & Analytics'] },
  { title: 'PySpark / Spark', competency: 3, category: ['Data & Analytics'] },
  { title: 'Model Evaluation (ROUGE / BLEU)', competency: 4, category: ['Data & Analytics'] },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

const colors = [
  '#534df8',
  '#107fbb',
  '#005d5f',
  '#d67215',
  '#895466',
  '#007dbc',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
