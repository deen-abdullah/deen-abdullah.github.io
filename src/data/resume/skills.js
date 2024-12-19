const skills = [
  {
    title: 'Python',
    competency: 5,
    category: ['Programming Language'],
  },
  {
    title: 'ASP.Net',
    competency: 4,
    category: ['Programming Language'],
  },
  {
    title: 'Java',
    competency: 4,
    category: ['Programming Language'],
  },
  {
    title: 'JavaScript',
    competency: 4,
    category: ['Programming Language'],
  },
  {
    title: 'C#',
    competency: 3,
    category: ['Programming Language'],
  },
  {
    title: 'C++',
    competency: 5,
    category: ['Programming Language'],
  },
  {
    title: 'C',
    competency: 5,
    category: ['Programming Language'],
  },
  {
    title: 'HTML-CSS',
    competency: 4,
    category: ['Web developmen'],
  },
  {
    title: 'PHP',
    competency: 3,
    category: ['Web developmen'],
  },
  {
    title: 'React',
    competency: 4,
    category: ['Web developmen'],
  },
  {
    title: 'Node.JS',
    competency: 4,
    category: ['Web developmen'],
  },
  {
    title: 'Flask',
    competency: 4,
    category: ['Web developmen'],
  },
  {
    title: 'Oracle',
    competency: 4,
    category: ['Database'],
  },
  {
    title: 'SQL',
    competency: 5,
    category: ['Database'],
  },
  {
    title: 'MySQL',
    competency: 5,
    category: ['Database'],
  },
  {
    title: 'PostgreSQL',
    competency: 4,
    category: ['Database'],
  },
  {
    title: 'Pytorch',
    competency: 5,
    category: ['ML & Data Engineering'],
  },
  {
    title: 'Tensorflow',
    competency: 5,
    category: ['ML & Data Engineering'],
  },
  {
    title: 'Numpy',
    competency: 5,
    category: ['ML & Data Engineering'],
  },
  {
    title: 'Scikit-Learn',
    competency: 5,
    category: ['ML & Data Engineering'],
  },
  {
    title: 'Matplotlib',
    competency: 4,
    category: ['ML & Data Engineering'],
  },
  {
    title: 'BERT',
    competency: 5,
    category: ['Language models'],
  },
  {
    title: 'GPT',
    competency: 5,
    category: ['Language models'],
  },
  {
    title: 'BART',
    competency: 5,
    category: ['Language models'],
  },
  {
    title: 'T5',
    competency: 5,
    category: ['Language models'],
  },
  {
    title: 'GNN',
    competency: 4,
    category: ['Language models'],
  },
  {
    title: 'GCN',
    competency: 4,
    category: ['Language models'],
  },
  {
    title: 'GAT',
    competency: 4,
    category: ['Language models'],
  },
  {
    title: 'Linux',
    competency: 5,
    category: ['Operating system'],
  },
  {
    title: 'UNIX',
    competency: 5,
    category: ['Operating system'],
  },
  {
    title: 'Mac OS',
    competency: 5,
    category: ['Operating system'],
  },
  {
    title: 'FastAPI',
    competency: 5,
    category: ['API development'],
  },
  {
    title: 'Correlation analysis',
    competency: 5,
    category: ['Statistical Analysis'],
  },
  {
    title: 'T-test',
    competency: 5,
    category: ['Statistical Analysis'],
  },
  {
    title: 'Git',
    competency: 5,
    category: ['Tool'],
  },
  {
    title: 'Tableau',
    competency: 5,
    category: ['Tool'],
  },
  {
    title: 'WEKA',
    competency: 5,
    category: ['Tool'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
'#534df8',
'#107fbb',
'#446170',
'#005d5f',
'#117c8a',
'#895466',
'#007dbc',
'#d67215',
'#c87251',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
