import { StandardSchemaV1 } from "@standard-schema/spec";

import { IValidation } from "../IValidation";

export const _createStandardSchema = <T>(
  fn: (input: unknown) => IValidation<T>,
): ((input: unknown) => IValidation<T>) & StandardSchemaV1<unknown, T> =>
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
              message: `expected ${error.expected}, got ${error.value}`,
              path: typiaPathToStandardSchemaPath(error.path),
            })),
          } satisfies StandardSchemaV1.FailureResult;
        }
      },
    },
  } satisfies StandardSchemaV1<unknown, T>);

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
