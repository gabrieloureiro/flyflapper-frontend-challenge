const options = {
  style: 'currency',
  currency: 'BRL'
}

const formatCurrency = (value: number): string => {
  return value.toLocaleString('pt-BR', options)
}

export default formatCurrency
