// Format number to currency
export default function formatCurrency(value) {
  if (typeof value === "string") {
    const currency = Number(value);
    return currency.toLocaleString("en-US", {
      style: "currency",
      currency: "BDT",
    });
  } else {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "BDT",
    });
  }
}
