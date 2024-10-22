export const _httpQueryReadString = (
  str: string | null,
): string | null | undefined =>
  str === null ? undefined : str === "null" ? null : str;
