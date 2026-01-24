export function formatDateShort(isoString) {
  if (!isoString) return "";

  return new Date(isoString).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
