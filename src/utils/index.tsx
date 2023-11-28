export const formatPrice = (price: number | undefined) => {
  if (price !== undefined) {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  return price;
};

export const getDescription = (
  description: string | undefined,
  caracteres: number
) => {
  if (description && description.length > caracteres) {
    return description.slice(0, caracteres) + "...";
  }
  return description;
};
