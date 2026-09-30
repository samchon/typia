/**
 * Remove common leading whitespace from template literal.
 *
 * Strips leading/trailing blank lines and removes the minimum indentation level
 * from all lines.
 *
 * Interpolated values are opaque: their text and indentation are preserved,
 * while only the template's literal lines determine common indentation.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @param strings Template literal strings
 * @param values Interpolated values
 * @returns Dedented string
 * @evidence contracts/common.md#principled-implementation Literal text and interpolation values remain separate segments, so only literal indentation is removed and values cannot be mistaken for markers or replacement instructions.
 * @evidence contracts/common.md#clear-and-simple-design One literal-line segmentation pass, one boundary/indentation pass and one rendering pass separate whitespace normalization from opaque value conversion without a marker protocol.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Structured segments preserve all interpolation strings uniformly without reserved magic text, escape-value lists or substitution passes that can rewrite earlier values.
 * @evidence contracts/common.md#meaningful-documentation The public comment states trimming and indentation rules and the opaque-value boundary, while the inline invariant explains why a line begins with a literal segment.
 * @evidence contracts/performance.md#efficient-algorithms Segmentation and a fixed number of line scans cost linear time in literal and output length; index bounds avoid repeated front removal and a running indentation minimum avoids spreading an unbounded line array into a call.
 * @evidenceExclude contracts/performance.md#reuse-equivalent-work Each call owns distinct template and interpolation values and performs one normalization; no repeated-request or graph computation is retained, and caching arbitrary generated strings would introduce new retention without a caller validity contract.
 * @evidence contracts/performance.md#bound-retention-and-release-resources Segment arrays, converted values and rendered strings are local to the invocation and proportional to input/output size; the helper retains no global cache, native handle or callback after returning.
 */
export function dedent(
  strings: TemplateStringsArray,
  ...values: Array<boolean | number | string>
): string {
  type Segment = string | { value: string };
  const lines: Segment[][] = [[]];
  for (let i = 0; i < strings.length; ++i) {
    const parts = strings[i]!.split("\n");
    for (let j = 0; j < parts.length; ++j) {
      if (j !== 0) lines.push([]);
      lines[lines.length - 1]!.push(parts[j]!);
    }
    if (i < values.length)
      lines[lines.length - 1]!.push({ value: String(values[i]) });
  }
  const isBlank = (line: Segment[]): boolean =>
    line.every((part) => typeof part === "string" && part.trim() === "");
  let begin = 0;
  let end = lines.length;
  while (begin < end && isBlank(lines[begin]!)) ++begin;
  while (end > begin && isBlank(lines[end - 1]!)) --end;
  if (begin === end) return "";

  let minIndent = Infinity;
  for (let i = begin; i < end; ++i) {
    if (isBlank(lines[i]!)) continue;
    // Splitting each literal starts every line with a literal segment. A value
    // ends its leading indentation even when its eventual text is empty.
    const first = lines[i]![0] as string;
    minIndent = Math.min(minIndent, first.match(/^[ \t]*/)![0].length);
  }
  return lines
    .slice(begin, end)
    .map((line) =>
      isBlank(line)
        ? ""
        : line
            .map((part, i) =>
              typeof part === "string"
                ? i === 0
                  ? part.slice(minIndent)
                  : part
                : part.value,
            )
            .join(""),
    )
    .join("\n");
}
