import { IValidation } from "@typia/interface";

import { NamingConvention } from "../NamingConvention";
import { dedent } from "../dedent";

/**
 * Formats validation failures as fenced data with inline error annotations.
 *
 * Missing values receive undefined placeholders; errors unreachable in the data
 * remain in a separate block. Native JSON encoding handles values and metadata,
 * while sibling ownership determines separators before annotations are added.
 * This diagnostic format includes comments and need not be strict JSON.
 *
 * @evidence contracts/common.md#principled-implementation A path index attaches each authored error to its rendered value, and used-error tracking preserves unreachable errors separately. Recursive calls carry sibling separator ownership, so arbitrary marker text inside JSON strings cannot become a syntax boundary; native JSON encoding supplies data and metadata spellings.
 * @evidence contracts/common.md#clear-and-simple-design One recursive renderer owns data traversal, placeholders and sibling layout; path helpers distinguish direct missing children from unreachable descendants. Separators are an input of value rendering rather than a second parser over its completed output.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Formatting follows container structure and the supplied failure paths without recognizing fixture names or interpreting marker substrings as comments. The ordinary toJSON protocol renders its returned value while preventing immediate repeated invocation on that value.
 * @evidence contracts/common.md#meaningful-documentation The comment describes inline/fallback errors, missing values, separator ownership and the diagnostic format's departure from strict JSON. The LLM JSON guide explains literal marker preservation for feedback consumers.
 */
export function stringifyValidationFailure(
  failure: IValidation.IFailure,
): string {
  const usedErrors: Set<IValidation.IError> = new Set();
  // Pre-index errors by path for O(1) lookup
  const errorsByPath: Map<string, IValidation.IError[]> = new Map();
  for (const e of failure.errors) {
    const arr: IValidation.IError[] | undefined = errorsByPath.get(e.path);
    if (arr !== undefined) arr.push(e);
    else errorsByPath.set(e.path, [e]);
  }
  const jsonOutput = stringify({
    value: failure.data,
    errorsByPath,
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
    return dedent`
      \`\`\`json
      ${jsonOutput}
      \`\`\`

      **Unmappable validation errors:**
      \`\`\`json
      ${JSON.stringify(unmappableErrors, null, 2)}
      \`\`\`
    `;
  return dedent`
    \`\`\`json
    ${jsonOutput}
    \`\`\`
  `;
}

function stringify(props: {
  value: unknown;
  errorsByPath: Map<string, IValidation.IError[]>;
  path: string;
  tab: number;
  inArray: boolean;
  inToJson: boolean;
  trailingComma?: boolean;
  usedErrors: Set<IValidation.IError>;
}): string {
  const { value, errorsByPath, path, tab, inArray, inToJson, usedErrors } =
    props;
  const indent: string = "  ".repeat(tab);
  const comma: string = props.trailingComma ? "," : "";
  const errorComment: string = getErrorComment(path, errorsByPath, usedErrors);

  // Handle undefined in arrays
  if (inArray && value === undefined) {
    return `${indent}undefined${comma}${errorComment}`;
  }

  // Array
  if (Array.isArray(value)) {
    // Check for missing array element errors (path[])
    const missingElementErrors = getMissingArrayElementErrors(
      path,
      errorsByPath,
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
        lines.push(`${indent}]${comma}`);
        return lines.join("\n");
      }
      return `${indent}[]${comma}${errorComment}`;
    }

    const lines: string[] = [];
    lines.push(`${indent}[${errorComment}`);

    value.forEach((item: unknown, index: number) => {
      const itemPath: string = `${path}[${index}]`;
      const isLastElement = index === value.length - 1;
      // If there are missing element errors, this is not truly the last line
      const needsComma = !isLastElement || hasMissingElements;

      const itemStr: string = stringify({
        value: item,
        errorsByPath,
        path: itemPath,
        tab: tab + 1,
        inArray: true,
        inToJson: false,
        trailingComma: needsComma,
        usedErrors,
      });
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

    lines.push(`${indent}]${comma}`);
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
        errorsByPath,
        path,
        tab,
        inArray,
        inToJson: true,
        trailingComma: props.trailingComma,
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
    const missingKeys: string[] = getMissingProperties(
      path,
      value,
      errorsByPath,
    );

    // Combine: defined entries + undefined entries with errors + missing properties
    const undefinedKeysWithErrors: string[] = Array.from(
      undefinedEntryKeys,
    ).filter((key) => {
      const propPath = NamingConvention.variable(key)
        ? `${path}.${key}`
        : `${path}[${JSON.stringify(key)}]`;
      return hasErrorsAtOrUnder(propPath, errorsByPath);
    });

    const allKeys: string[] = [
      ...definedEntries.map(([key]) => key),
      ...undefinedKeysWithErrors,
      ...missingKeys,
    ];

    if (allKeys.length === 0) {
      return `${indent}{}${comma}${errorComment}`;
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
          errorsByPath,
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
        const valStr: string = stringify({
          value: val,
          errorsByPath,
          path: propPath,
          tab: tab + 1,
          inArray: false,
          inToJson: false,
          trailingComma: index < array.length - 1,
          usedErrors,
        });
        const combined: string = keyLine + valStr.trimStart();
        lines.push(combined);
      }
    });

    lines.push(`${indent}}${comma}`);
    return lines.join("\n");
  }

  // Primitive types (null, boolean, number, string, undefined, etc.)
  const valStr: string =
    value === undefined
      ? "undefined"
      : (JSON.stringify(value) ?? String(value));
  return `${indent}${valStr}${comma}${errorComment}`;
}

/** Get error comment for a given path */
function getErrorComment(
  path: string,
  errorsByPath: Map<string, IValidation.IError[]>,
  usedErrors: Set<IValidation.IError>,
): string {
  const pathErrors: IValidation.IError[] | undefined = errorsByPath.get(path);
  if (pathErrors === undefined || pathErrors.length === 0) {
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
  errorsByPath: Map<string, IValidation.IError[]>,
  usedErrors: Set<IValidation.IError>,
): IValidation.IError[] {
  const wildcardPath = `${path}[]`;
  const missingErrors: IValidation.IError[] =
    errorsByPath.get(wildcardPath) ?? [];

  // Mark these errors as used
  missingErrors.forEach((e) => usedErrors.add(e));

  return missingErrors;
}

/** Check if any errors exist at or under the given path prefix */
function hasErrorsAtOrUnder(
  pathPrefix: string,
  errorsByPath: Map<string, IValidation.IError[]>,
): boolean {
  for (const errorPath of errorsByPath.keys()) {
    if (
      errorPath === pathPrefix ||
      errorPath.startsWith(pathPrefix + ".") ||
      errorPath.startsWith(pathPrefix + "[")
    ) {
      return true;
    }
  }
  return false;
}

/**
 * Find missing properties that have validation errors but don't exist in the
 * data Returns array of property keys that should be displayed as undefined
 */
function getMissingProperties(
  path: string,
  value: object,
  errorsByPath: Map<string, IValidation.IError[]>,
): string[] {
  const missingKeys: Set<string> = new Set();

  for (const errorPath of errorsByPath.keys()) {
    // Check if error.path is a direct child of current path
    const childKey = extractDirectChildKey(path, errorPath);
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
