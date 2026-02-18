import { IValidation } from "@typia/interface";

import { NamingConvention } from "./NamingConvention";

export namespace StringUtil {
  export function summarize(description: string): string {
    const newLine: number = description.indexOf("\n");
    const dot: number = description.indexOf(".");
    const minimum: number = Math.min(
      newLine === -1 ? Number.MAX_SAFE_INTEGER : newLine,
      dot === -1 ? Number.MAX_SAFE_INTEGER : dot,
      description.length,
    );
    return description.substring(0, minimum);
  }

  export function trim(
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

  export function stringifyValidationFailure(
    failure: IValidation.IFailure,
  ): string {
    const usedErrors: Set<IValidation.IError> = new Set();
    const jsonOutput = stringify({
      value: failure.data,
      errors: failure.errors,
      path: "$input",
      tab: 0,
      inArray: false,
      inToJson: false,
      usedErrors,
    });

    // Find errors that couldn't be embedded
    const unmappableErrors: IValidation.IError[] = failure.errors.filter(
      (e) => !usedErrors.has(e),
    );

    // If there are unmappable errors, append them as a separate block
    if (unmappableErrors.length > 0)
      return trim`
        \`\`\`json
        ${jsonOutput}
        \`\`\`

        **Unmappable validation errors:**
        \`\`\`json
        ${JSON.stringify(unmappableErrors, null, 2)}
        \`\`\`
      `;
    return trim`
      \`\`\`json
      ${jsonOutput}
      \`\`\`
    `;
  }
}

function stringify(props: {
  value: unknown;
  errors: IValidation.IError[];
  path: string;
  tab: number;
  inArray: boolean;
  inToJson: boolean;
  usedErrors: Set<IValidation.IError>;
}): string {
  const { value, errors, path, tab, inArray, inToJson, usedErrors } = props;
  const indent: string = "  ".repeat(tab);
  const errorComment: string = getErrorComment(path, errors, usedErrors);

  // Handle undefined in arrays
  if (inArray && value === undefined) {
    return `${indent}undefined${errorComment}`;
  }

  // Array
  if (Array.isArray(value)) {
    // Check for missing array element errors (path[])
    const missingElementErrors = getMissingArrayElementErrors(
      path,
      errors,
      usedErrors,
    );
    const hasMissingElements = missingElementErrors.length > 0;

    if (value.length === 0) {
      // Empty array but has missing element errors - show placeholders
      if (hasMissingElements) {
        const innerIndent = "  ".repeat(tab + 1);
        const lines: string[] = [];
        lines.push(`${indent}[${errorComment}`);
        missingElementErrors.forEach((e, idx) => {
          const errComment = ` // ❌ ${JSON.stringify([{ path: e.path, expected: e.expected, description: e.description }])}`;
          const comma = idx < missingElementErrors.length - 1 ? "," : "";
          lines.push(`${innerIndent}undefined${comma}${errComment}`);
        });
        lines.push(`${indent}]`);
        return lines.join("\n");
      }
      return `${indent}[]${errorComment}`;
    }

    const lines: string[] = [];
    lines.push(`${indent}[${errorComment}`);

    value.forEach((item: unknown, index: number) => {
      const itemPath: string = `${path}[${index}]`;
      const isLastElement = index === value.length - 1;
      // If there are missing element errors, this is not truly the last line
      const needsComma = !isLastElement || hasMissingElements;

      let itemStr: string = stringify({
        value: item,
        errors,
        path: itemPath,
        tab: tab + 1,
        inArray: true,
        inToJson: false,
        usedErrors,
      });
      // Add comma before the error comment if not the last element
      if (needsComma) {
        const itemLines: string[] = itemStr.split("\n");
        const lastLine: string = itemLines[itemLines.length - 1]!;
        const commentIndex: number = lastLine.indexOf(" //");
        if (commentIndex !== -1) {
          itemLines[itemLines.length - 1] = `${lastLine.slice(
            0,
            commentIndex,
          )},${lastLine.slice(commentIndex)}`;
        } else {
          itemLines[itemLines.length - 1] += ",";
        }
        itemStr = itemLines.join("\n");
      }
      lines.push(itemStr);
    });

    // Add missing element placeholders at the end for each [] error
    if (hasMissingElements) {
      const innerIndent = "  ".repeat(tab + 1);
      missingElementErrors.forEach((e, idx) => {
        const errComment = ` // ❌ ${JSON.stringify([{ path: e.path, expected: e.expected, description: e.description }])}`;
        const comma = idx < missingElementErrors.length - 1 ? "," : "";
        lines.push(`${innerIndent}undefined${comma}${errComment}`);
      });
    }

    lines.push(`${indent}]`);
    return lines.join("\n");
  }

  // Object
  if (typeof value === "object" && value !== null) {
    // Check for toJSON method
    // biome-ignore lint: intended
    if (!inToJson && typeof (value as any).toJSON === "function") {
      // biome-ignore lint: intended
      const jsonValue: unknown = (value as any).toJSON();
      return stringify({
        value: jsonValue,
        errors,
        path,
        tab,
        inArray,
        inToJson: true,
        usedErrors,
      });
    }

    // Get all entries from the object (including undefined values that have errors)
    const allEntries: [string, unknown][] = Object.entries(value);

    // Split into defined and undefined entries
    const definedEntries: [string, unknown][] = allEntries.filter(
      ([_, val]) => val !== undefined,
    );
    const undefinedEntryKeys: Set<string> = new Set(
      allEntries.filter(([_, val]) => val === undefined).map(([key]) => key),
    );

    // Find missing properties that have validation errors (not in object at all)
    const missingKeys: string[] = getMissingProperties(path, value, errors);

    // Combine: defined entries + undefined entries with errors + missing properties
    const undefinedKeysWithErrors: string[] = Array.from(
      undefinedEntryKeys,
    ).filter((key) => {
      const propPath = NamingConvention.variable(key)
        ? `${path}.${key}`
        : `${path}[${JSON.stringify(key)}]`;
      return errors.some((e) => e.path.startsWith(propPath));
    });

    const allKeys: string[] = [
      ...definedEntries.map(([key]) => key),
      ...undefinedKeysWithErrors,
      ...missingKeys,
    ];

    if (allKeys.length === 0) {
      return `${indent}{}${errorComment}`;
    }

    const lines: string[] = [];
    lines.push(`${indent}{${errorComment}`);

    allKeys.forEach((key, index, array) => {
      const propPath: string = NamingConvention.variable(key)
        ? `${path}.${key}`
        : `${path}[${JSON.stringify(key)}]`;
      const propIndent: string = "  ".repeat(tab + 1);

      // Get the value (undefined for missing properties or undefined entries)
      const val: unknown =
        missingKeys.includes(key) || undefinedKeysWithErrors.includes(key)
          ? undefined
          : // biome-ignore lint: intended
            (value as any)[key];

      // Primitive property value (including undefined for missing properties)
      if (
        val === undefined ||
        val === null ||
        typeof val === "boolean" ||
        typeof val === "number" ||
        typeof val === "string"
      ) {
        const propErrorComment: string = getErrorComment(
          propPath,
          errors,
          usedErrors,
        );
        const keyStr: string = JSON.stringify(key);
        const valueStr: string =
          val === undefined
            ? `${propIndent}${keyStr}: undefined`
            : `${propIndent}${keyStr}: ${JSON.stringify(val)}`;
        const withComma: string =
          index < array.length - 1 ? `${valueStr},` : valueStr;
        const line: string = withComma + propErrorComment;
        lines.push(line);
      }
      // Complex property value (object or array)
      else {
        const keyLine: string = `${propIndent}${JSON.stringify(key)}: `;
        let valStr: string = stringify({
          value: val,
          errors,
          path: propPath,
          tab: tab + 1,
          inArray: false,
          inToJson: false,
          usedErrors,
        });
        const valStrWithoutIndent: string = valStr.trimStart();
        // Add comma before the error comment if not the last property
        if (index < array.length - 1) {
          const valLines: string[] = valStrWithoutIndent.split("\n");
          const lastLine: string = valLines[valLines.length - 1]!;
          const commentIndex: number = lastLine.indexOf(" //");
          if (commentIndex !== -1) {
            valLines[valLines.length - 1] = `${lastLine.slice(
              0,
              commentIndex,
            )},${lastLine.slice(commentIndex)}`;
          } else {
            valLines[valLines.length - 1] += ",";
          }
          valStr = valLines.join("\n");
        } else {
          valStr = valStrWithoutIndent;
        }
        const combined: string = keyLine + valStr;
        lines.push(combined);
      }
    });

    lines.push(`${indent}}`);
    return lines.join("\n");
  }

  // Primitive types (null, boolean, number, string, undefined, etc.)
  const valStr: string =
    value === undefined
      ? "undefined"
      : (JSON.stringify(value) ?? String(value));
  return `${indent}${valStr}${errorComment}`;
}

/** Get error comment for a given path */
function getErrorComment(
  path: string,
  errors: IValidation.IError[],
  usedErrors: Set<IValidation.IError>,
): string {
  const pathErrors: IValidation.IError[] = errors.filter(
    (e: IValidation.IError) => e.path === path,
  );
  if (pathErrors.length === 0) {
    return "";
  }

  // Mark these errors as used
  pathErrors.forEach((e) => usedErrors.add(e));

  return ` // ❌ ${JSON.stringify(
    pathErrors.map((e) => ({
      path: e.path,
      expected: e.expected,
      description: e.description,
    })),
  )}`;
}

/**
 * Check if there are missing array element errors (path ending with []) Returns
 * an array of error objects, one per missing element
 */
function getMissingArrayElementErrors(
  path: string,
  errors: IValidation.IError[],
  usedErrors: Set<IValidation.IError>,
): IValidation.IError[] {
  const wildcardPath = `${path}[]`;
  const missingErrors = errors.filter((e) => e.path === wildcardPath);

  // Mark these errors as used
  missingErrors.forEach((e) => usedErrors.add(e));

  return missingErrors;
}

/**
 * Find missing properties that have validation errors but don't exist in the
 * data Returns array of property keys that should be displayed as undefined
 */
function getMissingProperties(
  path: string,
  value: object,
  errors: IValidation.IError[],
): string[] {
  const missingKeys: Set<string> = new Set();

  for (const e of errors) {
    // Check if error.path is a direct child of current path
    const childKey = extractDirectChildKey(path, e.path);
    if (childKey !== null) {
      // Check if this property actually exists in the value
      if (!(childKey in value)) {
        missingKeys.add(childKey);
      }
    }
  }

  return Array.from(missingKeys);
}

/**
 * Extract direct child property key if errorPath is a direct child of
 * parentPath Returns null if not a direct child
 *
 * Examples:
 *
 * - ExtractDirectChildKey("$input", "$input.email") => "email"
 * - ExtractDirectChildKey("$input", "$input.user.email") => null (grandchild)
 * - ExtractDirectChildKey("$input.user", "$input.user.email") => "email"
 * - ExtractDirectChildKey("$input", "$input[0]") => null (array index, not object
 *   property)
 * - ExtractDirectChildKey("$input", "$input["foo-bar"]") => "foo-bar"
 * - ExtractDirectChildKey("$input", "$input["foo"]["bar"]") => null (grandchild)
 */
function extractDirectChildKey(
  parentPath: string,
  errorPath: string,
): string | null {
  if (!errorPath.startsWith(parentPath)) {
    return null;
  }

  const suffix = errorPath.slice(parentPath.length);

  // Match ".propertyName" pattern (direct child property with dot notation)
  // Should not contain additional dots or brackets after the property name
  const dotMatch = suffix.match(/^\.([^.[\]]+)$/);
  if (dotMatch !== null) {
    return dotMatch[1]!;
  }

  // Match '["key"]' pattern (direct child property with bracket notation)
  // The key is a JSON-encoded string
  const bracketMatch = suffix.match(/^\[("[^"\\]*(?:\\.[^"\\]*)*")\]$/);
  if (bracketMatch !== null) {
    try {
      const parsed = JSON.parse(bracketMatch[1]!);
      // Ensure it's a string key, not a number (array index)
      if (typeof parsed === "string") {
        return parsed;
      }
    } catch {
      // Invalid JSON, ignore
    }
  }

  return null;
}
