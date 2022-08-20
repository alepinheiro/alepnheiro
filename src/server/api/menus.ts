export default defineEventHandler(() => {
  return {
    menus: [
      { id: 1, title: 'Quem sou eu?', url: 'whoami', icon: 'i-carbon-user' },
      { id: 2, title: 'Experiência Profissional', url: 'jobs', icon: 'i-carbon-store' },
      { id: 3, title: 'Habilidades e Conhecimentos', url: 'skills', icon: 'i-carbon-store' },
      // { id: 4, title: 'Hobbies', url: 'pinia', icon: 'i-carbon-store' },
      { id: 5, title: 'Contato', url: 'contact', icon: 'i-carbon-store' },
    ],
  }
})
