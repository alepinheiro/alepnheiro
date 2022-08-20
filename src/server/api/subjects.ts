export default defineEventHandler(() => {
  return {
    subjects: [
      { id: 1, subject: 'Orçamento', text: ' gostaria de fazer um orçamento.' },
      { id: 2, subject: 'Dúvida', text: ' gostaria de tirar uma dúvida.' },
      { id: 3, subject: 'Elogio', text: ' gostaria de te fazer um elogio.' },
    ],
  }
})
