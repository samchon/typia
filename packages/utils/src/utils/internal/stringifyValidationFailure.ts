import { IValidation } from "@typia/interface";

import { NamingConvention } from "../NamingConvention";
import { dedent } from "../dedent";

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
  usedErrors: Set<IValidation.IError>;
}): string {
  const { value, errorsByPath, path, tab, inArray, inToJson, usedErrors } =
    props;
  const indent: string = "  ".repeat(tab);
  const errorComment: string = getErrorComment(path, errorsByPath, usedErrors);

  // Handle undefined in arrays
  if (inArray && value === undefined) {
    return `${indent}undefined${errorComment}`;
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
        errorsByPath,
        path: itemPath,
        tab: tab + 1,
        inArray: true,
        inToJson: false,
        usedErrors,
      });
      // Add comma before the error comment if not the last element
      if (needsComma) {
        itemStr = insertCommaBeforeComment(itemStr);
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
        errorsByPath,
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
        let valStr: string = stringify({
          value: val,
          errorsByPath,
          path: propPath,
          tab: tab + 1,
          inArray: false,
          inToJson: false,
          usedErrors,
        });
        const valStrWithoutIndent: string = valStr.trimStart();
        // Add comma before the error comment if not the last property
        if (index < array.length - 1) {
          valStr = insertCommaBeforeComment(valStrWithoutIndent);
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

/** Insert comma before inline error comment on the last line */
function insertCommaBeforeComment(str: string): string {
  const lines: string[] = str.split("\n");
  const lastLine: string = lines[lines.length - 1]!;
  // Use specific error marker to avoid false positives with values containing " //"
  const commentIndex: number = lastLine.indexOf(" // ❌");
  if (commentIndex !== -1) {
    lines[lines.length - 1] = `${lastLine.slice(
      0,
      commentIndex,
    )},${lastLine.slice(commentIndex)}`;
  } else {
    lines[lines.length - 1] += ",";
  }
  return lines.join("\n");
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
    if (errorPath.startsWith(pathPrefix)) {
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
