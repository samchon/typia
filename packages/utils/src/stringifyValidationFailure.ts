import { IValidation } from "@typia/interface";

import { Escaper } from "./Escaper";

export function stringifyValidateFailure(
  failure: IValidation.IFailure,
): string {
  const usedErrors: Set<IValidation.IError> = new Set();
  const jsonOutput: string = stringify({
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
    return `\`\`\`json\n${jsonOutput}\n\`\`\`\n\n**Unmappable validation errors:**\n\n\`\`\`json\n${JSON.stringify(unmappableErrors, null, 2)}\n\`\`\``;
  return `\`\`\`json\n${jsonOutput}\n\`\`\``;
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
    if (value.length === 0) {
      return `${indent}[]${errorComment}`;
    }

    const lines: string[] = [];
    lines.push(`${indent}[${errorComment}`);

    value.forEach((item: unknown, index: number) => {
      const itemPath: string = `${path}[${index}]`;
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
      if (index < value.length - 1) {
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

    lines.push(`${indent}]`);
    return lines.join("\n");
  }

  // Object
  if (typeof value === "object" && value !== null) {
    // Check for toJSON method
    if (!inToJson && typeof (value as any).toJSON === "function") {
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

    // Get existing entries (filter out undefined values from actual data)
    const existingEntries: [string, unknown][] = Object.entries(value).filter(
      ([_, val]) => val !== undefined,
    );

    // Find missing properties that have validation errors
    const missingKeys: string[] = getMissingProperties(path, value, errors);

    // Combine existing and missing properties
    const allKeys: string[] = [
      ...existingEntries.map(([key]) => key),
      ...missingKeys,
    ];

    if (allKeys.length === 0) {
      return `${indent}{}${errorComment}`;
    }

    const lines: string[] = [];
    lines.push(`${indent}{${errorComment}`);

    allKeys.forEach((key, index, array) => {
      const propPath: string = Escaper.variable(key)
        ? `${path}.${key}`
        : `${path}[${JSON.stringify(key)}]`;
      const propIndent: string = "  ".repeat(tab + 1);

      // Get the value (undefined for missing properties)
      const val: unknown = missingKeys.includes(key)
        ? undefined
        : (value as any)[key];

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
        const valueStr: string =
          val === undefined
            ? `${propIndent}"${key}": undefined`
            : `${propIndent}"${key}": ${JSON.stringify(val)}`;
        const withComma: string =
          index < array.length - 1 ? `${valueStr},` : valueStr;
        const line: string = withComma + propErrorComment;
        lines.push(line);
      }
      // Complex property value (object or array)
      else {
        const keyLine: string = `${propIndent}"${key}": `;
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
 */
function extractDirectChildKey(
  parentPath: string,
  errorPath: string,
): string | null {
  if (!errorPath.startsWith(parentPath)) {
    return null;
  }

  const suffix = errorPath.slice(parentPath.length);

  // Match ".propertyName" pattern (direct child property)
  // Should not contain additional dots or brackets after the property name
  const match = suffix.match(/^\.([^.[\]]+)$/);
  return match !== null ? match[1]! : null;
}
