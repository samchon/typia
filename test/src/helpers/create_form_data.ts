export const create_form_data = (input: Record<string, any>): FormData => {
  const encoded: FormData = new FormData();
  for (const [key, value] of Object.entries(input))
    if (value === undefined) continue;
    else if (Array.isArray(value))
      for (const elem of value) encoded.append(key, String(elem));
    else if (value instanceof Blob)
      if (value instanceof File) encoded.append(key, value, value.name);
      else encoded.append(key, value);
    else encoded.append(key, String(value));
  return encoded;
};
