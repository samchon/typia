/**
 * Remove common leading whitespace from template literal.
 *
 * Strips leading/trailing blank lines and removes the minimum
 * indentation level from all lines.
 *
 * @param strings Template literal strings
 * @param values Interpolated values
 * @returns Dedented string
 */
export function dedent(
  strings: TemplateStringsArray,
  ...values: Array<boolean | number | string>
): string {
  // 먼저 모든 template string 부분들을 합쳐서 전체 구조를 파악
  let combined: string = strings[0]!;
  for (let i = 0; i < values.length; i++) {
    combined += `__PLACEHOLDER_${i}__` + strings[i + 1];
  }

  // 줄별로 나누기
  const lines = combined.split("\n");

  // 앞뒤 빈 줄 제거
  while (lines.length > 0 && lines[0]!.trim() === "") {
    lines.shift();
  }
  while (lines.length > 0 && lines[lines.length - 1]!.trim() === "") {
    lines.pop();
  }

  if (lines.length === 0) return "";

  // 비어있지 않은 줄들에서 최소 indentation 찾기
  const nonEmptyLines = lines.filter((line) => line.trim() !== "");
  const minIndent = Math.min(
    ...nonEmptyLines.map((line) => {
      const match = line.match(/^[ \t]*/);
      return match ? match[0].length : 0;
    }),
  );

  // 모든 줄에서 최소 indentation 제거
  const dedentedLines = lines.map((line) => {
    if (line.trim() === "") return "";
    return line.slice(minIndent);
  });

  // placeholder를 실제 값으로 교체
  let result = dedentedLines.join("\n");
  for (let i = 0; i < values.length; i++) {
    result = result.replace(`__PLACEHOLDER_${i}__`, String(values[i]));
  }

  return result;
}
