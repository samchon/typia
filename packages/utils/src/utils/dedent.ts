/**
 * Remove common leading whitespace from template literal.
 *
 * Strips leading/trailing blank lines and removes the minimum indentation level
 * from all lines.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @param strings Template literal strings
 * @param values Interpolated values
 * @returns Dedented string
 */
export function dedent(
  strings: TemplateStringsArray,
  ...values: Array<boolean | number | string>
): string {
  // Combine all template string parts to understand the full structure
  let combined: string = strings[0]!;
  for (let i = 0; i < values.length; i++) {
    combined += `__PLACEHOLDER_${i}__` + strings[i + 1];
  }

  // Split into lines
  const lines = combined.split("\n");

  // Remove leading and trailing empty lines
  while (lines.length > 0 && lines[0]!.trim() === "") {
    lines.shift();
  }
  while (lines.length > 0 && lines[lines.length - 1]!.trim() === "") {
    lines.pop();
  }

  if (lines.length === 0) return "";

  // Find minimum indentation from non-empty lines
  const nonEmptyLines = lines.filter((line) => line.trim() !== "");
  const minIndent = Math.min(
    ...nonEmptyLines.map((line) => {
      const match = line.match(/^[ \t]*/);
      return match ? match[0].length : 0;
    }),
  );

  // Remove minimum indentation from all lines
  const dedentedLines = lines.map((line) => {
    if (line.trim() === "") return "";
    return line.slice(minIndent);
  });

  // Replace placeholders with actual values
  let result = dedentedLines.join("\n");
  for (let i = 0; i < values.length; i++) {
    result = result.replace(`__PLACEHOLDER_${i}__`, String(values[i]));
  }

  return result;
}
