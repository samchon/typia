import { IValidation, StandardSchemaV1 } from "@typia/interface";

/**
 * Make a validator satisfy the Standard Schema contract.
 *
 * The same function is returned with a `~standard` property whose `validate`
 * runs it and maps its errors to issues with key-segment paths.
 *
 * @evidence contracts/common.md#principled-implementation The validator function is extended with a `~standard` property that satisfies the Standard Schema contract: version 1, vendor `typia`, and a validate function that runs the original validator and maps its errors to issues whose path is parsed from typia's `$input` notation into key segments. Success returns the data as the value. The function is modified in place with Object.assign, so the returned value is the same callable.
 * @evidence contracts/common.md#clear-and-simple-design One factory and a path parser written as a small state machine for start, property, string key and number key; the value formatter is separate.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The contract members are declared by the specification and are filled from the validator's own results, with no case keyed on a consumer. The parser throws for a path that does not start with `$input`, which the transform never produces.
 * @evidence contracts/common.md#meaningful-documentation The doc states the added property, the issue mapping and that the returned function is the same object.
 */
export const _createStandardSchema = <T>(
  fn: (input: unknown) => IValidation<T>,
): ((input: unknown) => IValidation<T>) & StandardSchemaV1<T, T> =>
  Object.assign(fn, {
    "~standard": {
      version: 1,
      vendor: "typia",
      validate: (input: unknown): StandardSchemaV1.Result<T> => {
        const result = fn(input);
        if (result.success) {
          return {
            value: result.data,
          } satisfies StandardSchemaV1.SuccessResult<T>;
        } else {
          return {
            issues: result.errors.map((error) => ({
              message: `expected ${error.expected}, got ${formatValue(error.value)}`,
              path: typiaPathToStandardSchemaPath(error.path),
            })),
          } satisfies StandardSchemaV1.FailureResult;
        }
      },
    },
  } satisfies StandardSchemaV1<T, T>);

const formatValue = (value: unknown): string => {
  if (typeof value === "object") {
    if (value === null) return "null";
    try {
      if (Array.isArray(value)) return "[object Array]";
    } catch {
      // A revoked proxy can throw even for Array.isArray().
    }
    return "[object Object]";
  }
  if (typeof value === "function") return "[function]";
  return String(value);
};

enum PathParserState {
  // Start of a new segment
  // When the parser is in this state,
  // the pointer must point `.` or `[` or equal to length of the path
  Start,
  // Parsing a property key (`.hoge`)
  Property,
  // Parsing a string key (`["fuga"]`)
  StringKey,
  // Parsing a number key (`[42]`)
  NumberKey,
}

const typiaPathToStandardSchemaPath = (
  path: string,
): ReadonlyArray<StandardSchemaV1.PathSegment> => {
  if (!path.startsWith("$input")) {
    throw new Error(`Invalid path: ${JSON.stringify(path)}`);
  }

  const segments: StandardSchemaV1.PathSegment[] = [];
  let currentSegment = "";
  let state: PathParserState = PathParserState.Start;
  let index = "$input".length - 1;
  while (index < path.length - 1) {
    index++;
    const char = path[index];

    if (state === PathParserState.Property) {
      if (char === "." || char === "[") {
        // End of property
        segments.push({
          key: currentSegment,
        });
        state = PathParserState.Start;
      } else if (index === path.length - 1) {
        // End of path
        currentSegment += char;
        segments.push({
          key: currentSegment,
        });
        index++;
        state = PathParserState.Start;
      } else {
        currentSegment += char;
      }
    } else if (state === PathParserState.StringKey) {
      if (char === '"') {
        // End of string key
        segments.push({
          key: JSON.parse(currentSegment + char),
        });
        // Skip `"` and `]`
        index += 2;
        state = PathParserState.Start;
      } else if (char === "\\") {
        // Skip the next character from parsing
        currentSegment += path[index];
        index++;
        currentSegment += path[index];
      } else {
        currentSegment += char;
      }
    } else if (state === PathParserState.NumberKey) {
      if (char === "]") {
        // End of number key
        segments.push({
          key: Number.parseInt(currentSegment),
        });
        index++;
        state = PathParserState.Start;
      } else {
        currentSegment += char;
      }
    }

    if (state === PathParserState.Start && index < path.length - 1) {
      const newChar = path[index];
      currentSegment = "";
      if (newChar === "[") {
        if (path[index + 1] === '"') {
          // Start of string key
          // NOTE: Typia uses JSON.stringify for this kind of keys, so `'` will not used as a string delimiter
          state = PathParserState.StringKey;
          index++;
          currentSegment = '"';
        } else {
          // Start of number key
          state = PathParserState.NumberKey;
        }
      } else if (newChar === ".") {
        // Start of property
        state = PathParserState.Property;
      } else {
        throw new Error("Unreachable: pointer points invalid character");
      }
    }
  }

  if (state !== PathParserState.Start) {
    throw new Error(`Failed to parse path: ${JSON.stringify(path)}`);
  }

  return segments;
};
