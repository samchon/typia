export const create_form_data = (input: Record<string, any>): FormData => {
  const encoded: FormData = new FormData();
  for (const [key, value] of Object.entries(input))
    if (Array.isArray(value)) value.map(append(encoded)(key));
    else append(encoded)(key)(value);
  return encoded;
};

const append = (data: FormData) => (key: string) => (value: any) => {
  if (value === undefined) return;
  else if (value instanceof Blob)
    if (value instanceof File) data.append(key, value, value.name);
    else data.append(key, value);
  else data.append(key, String(value));
};
