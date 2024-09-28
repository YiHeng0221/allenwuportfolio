export type SkillItem = {
  name: string
  percentage: number
  icon: string
  type: 'frontend' | 'backend' | 'test' | 'cicd' | 'design'
}

export const skillTypes = {
  design: 'DESIGN',
  frontend: 'FRONTEND',
  test: 'TEST',
  backend: 'BACKEND',
  cicd: 'CICD & VERSION CONTROL',
}

export const skills: SkillItem[] = [
  {
    name: 'Bootstrap',
    percentage: 70,
    icon: '/logo/bootstrap.png',
    type: 'frontend',
  },
  {
    name: 'Bun',
    percentage: 60,
    icon: '/logo/bun.png',
    type: 'backend',
  },
  {
    name: 'CSS',
    percentage: 90,
    icon: '/logo/css.png',
    type: 'frontend',
  },
  {
    name: 'Cypress',
    percentage: 90,
    icon: '/logo/cypress.png',
    type: 'test',
  },
  {
    name: 'Docker',
    percentage: 50,
    icon: '/logo/docker.png',
    type: 'cicd',
  },
  {
    name: 'Figma',
    percentage: 80,
    icon: '/logo/figma.png',
    type: 'design',
  },
  {
    name: 'Gatsby',
    percentage: 60,
    icon: '/logo/gatsby.png',
    type: 'frontend',
  },
  {
    name: 'Git',
    percentage: 90,
    icon: '/logo/git.png',
    type: 'cicd',
  },
  {
    name: 'GitHub',
    percentage: 90,
    icon: '/logo/github.png',
    type: 'cicd',
  },
  {
    name: 'Heroku',
    percentage: 60,
    icon: '/logo/heroku.png',
    type: 'cicd',
  },
  {
    name: 'HTML',
    percentage: 90,
    icon: '/logo/html.png',
    type: 'frontend',
  },
  {
    name: 'Jest',
    percentage: 80,
    icon: '/logo/jest.png',
    type: 'test',
  },
  {
    name: 'MySQL',
    percentage: 60,
    icon: '/logo/mysql.png',
    type: 'backend',
  },
  {
    name: 'Netlify',
    percentage: 50,
    icon: '/logo/netlify.png',
    type: 'cicd',
  },
  {
    name: 'Next.js',
    percentage: 80,
    icon: '/logo/next.png',
    type: 'frontend',
  },
  {
    name: 'Node.js (Express)',
    percentage: 70,
    icon: '/logo/node_js.png',
    type: 'backend',
  },
  {
    name: 'p5.js',
    percentage: 50,
    icon: '/logo/p5.png',
    type: 'frontend',
  },
  {
    name: 'Playwright',
    percentage: 70,
    icon: '/logo/playwright.png',
    type: 'test',
  },
  {
    name: 'PocketBase',
    percentage: 60,
    icon: '/logo/pocketbase.png',
    type: 'backend',
  },
  {
    name: 'Puppeteer',
    percentage: 60,
    icon: '/logo/puppeteer.png',
    type: 'test',
  },
  {
    name: 'Python (Django)',
    percentage: 70,
    icon: '/logo/python.png',
    type: 'backend',
  },
  {
    name: 'React',
    percentage: 80,
    icon: '/logo/react.png',
    type: 'frontend',
  },
  {
    name: 'Redux',
    percentage: 70,
    icon: '/logo/redux.png',
    type: 'frontend',
  },
  {
    name: 'SCSS',
    percentage: 90,
    icon: '/logo/scss.png',
    type: 'frontend',
  },
  {
    name: 'Socket.io',
    percentage: 70,
    icon: '/logo/socket_io.png',
    type: 'backend',
  },
  {
    name: 'Styled Components',
    percentage: 90,
    icon: '/logo/styled_components.png',
    type: 'frontend',
  },
  {
    name: 'Svelte',
    percentage: 80,
    icon: '/logo/svelte.png',
    type: 'frontend',
  },
  {
    name: 'Tailwind',
    percentage: 80,
    icon: '/logo/tailwind.png',
    type: 'frontend',
  },
  {
    name: 'Testing Library',
    percentage: 80,
    icon: '/logo/testing_library.png',
    type: 'test',
  },
  {
    name: 'Three.js',
    percentage: 60,
    icon: '/logo/three.png',
    type: 'frontend',
  },
  {
    name: 'TypeScript',
    percentage: 70,
    icon: '/logo/ts.png',
    type: 'frontend',
  },
  {
    name: 'Vercel',
    percentage: 60,
    icon: '/logo/vercel.png',
    type: 'cicd',
  },
  {
    name: 'Vite',
    percentage: 60,
    icon: '/logo/vite.png',
    type: 'frontend',
  },
  {
    name: 'Vue.js',
    percentage: 90,
    icon: '/logo/vue.png',
    type: 'frontend',
  },
  {
    name: 'Webpack',
    percentage: 80,
    icon: '/logo/webpack.png',
    type: 'frontend',
  },
  {
    name: 'Zustand',
    percentage: 80,
    icon: '/logo/zustand.png',
    type: 'frontend',
  },
]
