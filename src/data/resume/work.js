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
    position: 'Researcher',
    url: 'https://www.ulethbridge.ca/',
    startDate: '2018-09-03',
    summary: '',
    highlights: [
      'Conducting and coordinating Team-based research on developing Software Quality.', 
      'Extracted 700K data to prepare data sets for improving programming quality tasks using LLMs.', 
      'Improved performance for BERT-SUM model for query focused summarization using 300K data.',
    ],
  },
  {
    name: 'University of Lethbridge, Dept. of Math. & Computer Science',
    position: 'Lecturer-I',
    url: 'https://www.ulethbridge.ca/',
    startDate: '2022-05-01',
    endDate: '2024-06-30',
    summary: `Prepared course material, exam questions, delivering lectures and marking for Fundamental of Programming-I (C++) course.`,
    highlights: [
    ],
  },
  {
    name: 'Dept. of CSE, Primeasia University, Bangladesh',
    position: 'Assistant Professor',
    url: 'https://www.primeasia.edu.bd/',
    startDate: '2011-06-07',
    endDate: '2018-08-31',
    summary: `Performed teaching and various administrative duties as senior faculty.`,
    highlights: [
    ],
  },
  {
    name: 'Dept. of CSE, Primeasia University, Bangladesh',
    position: 'Programming contest coach',
    url: 'https://www.primeasia.edu.bd/',
    startDate: '2012-01-01',
    endDate: '2015-12-31',
    summary: `Mentored undergraduate teams for regional and inter-university programming contests.`,
    highlights: [
    ],
  },
  {
    name: 'iFlexSoft Ltd, Bangladesh',
    position: 'Software Developer',
    url: 'https://iflexsoft.com/',
    startDate: '2011-01-01',
    endDate: '2011-12-31',
    summary: `Web-based applications development in ASP.NET and worked on Troubleshooting bug issues.`,
    highlights: [
    ],
  },
  {
    name: 'Peninsula IT Ltd, Dhaka, Bangladesh',
    position: 'Software Development Intern',
    url: '',
    startDate: '2009-09-01',
    endDate: '2009-12-31',
    summary: `Designed Tree view menu and front-end GUI.`,
    highlights: [
    ],
  },
];

export default work;
