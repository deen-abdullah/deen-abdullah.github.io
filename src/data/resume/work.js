/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'University of Lethbridge, Dept. of Math. & Computer Science',
    position: 'Applied Machine Learning Engineer / Research Associate',
    url: 'https://www.ulethbridge.ca/',
    startDate: '2018-09-03',
    endDate: '',
    summary:
      'Leading applied research and engineering of scalable LLM-driven ML systems for software quality intelligence, NLP pipelines, and GPU-efficient AI infrastructure.',
    highlights: [
      'Designed and deployed LLM-based pipelines for software quality prediction, intelligent code analytics, and automated summarization.',
      'Built and curated large-scale ML datasets (700K+ records), improving model training and evaluation reliability.',
      'Enhanced query-focused summarization performance by optimizing BERT-SUM models using 300K+ curated datasets.',
      'Developed end-to-end ML workflows including data ingestion, preprocessing, training, evaluation, deployment, and monitoring.',
    ],
  },
  {
    name: 'University of Lethbridge, Dept. of Math. & Computer Science',
    position: 'Lecturer',
    url: 'https://www.ulethbridge.ca/',
    startDate: '2022-05-01',
    endDate: '2025-12-31',
    summary:
      'Delivered undergraduate computer science courses and mentored students in applied programming, algorithms, and software engineering practices.',
    highlights: [
      'Prepared curriculum materials, examinations, and practical assignments for C++ programming and Computer Graphics courses.',
      'Mentored students in developing production-ready programming projects and computational problem-solving skills.',
    ],
  },
  {
    name: 'Farpoint Technologies Inc.',
    position: 'AI Engineer (Project-based Collaboration)',
    url: '',
    startDate: '2024-01-01',
    endDate: '2024-03-31',
    summary:
      'Collaborated on deployment and benchmarking of a commercial LLM-based meeting intelligence platform in a remote industry engagement.',
    highlights: [
      'Supported deployment of speech-to-text pipelines using Whisper-based transcription systems for meeting intelligence applications.',
      'Benchmarked multiple LLM configurations to evaluate inference latency, throughput, and system performance.',
      'Analyzed GPU utilization and efficiency across model setups to inform cost-aware infrastructure and deployment decisions.',
    ],
  },
  {
    name: 'Dept. of CSE, Primeasia University, Bangladesh',
    position: 'Assistant Professor',
    url: 'https://www.primeasia.edu.bd/',
    startDate: '2011-06-07',
    endDate: '2018-08-31',
    summary:
      'Taught undergraduate and graduate computer science courses while supervising research and contributing to curriculum development.',
    highlights: [
      'Led student research supervision, departmental academic coordination, and technical mentoring initiatives.',
    ],
  },
];

export default work;
