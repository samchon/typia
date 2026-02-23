<<<<<<< HEAD
=======
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
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
export function dedent(
  strings: TemplateStringsArray,
  ...values: Array<boolean | number | string>
): string {
<<<<<<< HEAD
  // 먼저 모든 template string 부분들을 합쳐서 전체 구조를 파악
=======
  // Combine all template string parts to understand the full structure
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
  let combined: string = strings[0]!;
  for (let i = 0; i < values.length; i++) {
    combined += `__PLACEHOLDER_${i}__` + strings[i + 1];
  }

<<<<<<< HEAD
  // 줄별로 나누기
  const lines = combined.split("\n");

  // 앞뒤 빈 줄 제거
=======
  // Split into lines
  const lines = combined.split("\n");

  // Remove leading and trailing empty lines
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
  while (lines.length > 0 && lines[0]!.trim() === "") {
    lines.shift();
  }
  while (lines.length > 0 && lines[lines.length - 1]!.trim() === "") {
    lines.pop();
  }

  if (lines.length === 0) return "";

<<<<<<< HEAD
  // 비어있지 않은 줄들에서 최소 indentation 찾기
=======
  // Find minimum indentation from non-empty lines
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
  const nonEmptyLines = lines.filter((line) => line.trim() !== "");
  const minIndent = Math.min(
    ...nonEmptyLines.map((line) => {
      const match = line.match(/^[ \t]*/);
      return match ? match[0].length : 0;
    }),
  );

<<<<<<< HEAD
  // 모든 줄에서 최소 indentation 제거
=======
  // Remove minimum indentation from all lines
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
  const dedentedLines = lines.map((line) => {
    if (line.trim() === "") return "";
    return line.slice(minIndent);
  });

<<<<<<< HEAD
  // placeholder를 실제 값으로 교체
=======
  // Replace placeholders with actual values
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
  let result = dedentedLines.join("\n");
  for (let i = 0; i < values.length; i++) {
    result = result.replace(`__PLACEHOLDER_${i}__`, String(values[i]));
  }

  return result;
}
