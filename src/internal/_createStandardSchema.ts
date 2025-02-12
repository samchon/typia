import { StandardSchemaV1 } from "@standard-schema/spec";

import { IValidation } from "../IValidation";

export const _createStandardSchema = <T>(
  fn: (input: unknown) => IValidation<T>,
) =>
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
  // the pointer must:
  // - point the first character,
  // - point `.` or `[`,
  // - or point the end of string.
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
  const segments: StandardSchemaV1.PathSegment[] = [];
  let currentSegment = "";
  let state: PathParserState = PathParserState.Start;
  let index = -1;
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
        pointer++;
        state = PathParserState.Start;
      } else {
        currentSegment += char;
      }
    } else if (state === PathParserState.StringKey) {
      if (char === '"') {
        // End of string key
        segments.push({
          key: JSON.parse(currentSegment),
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
      currentSegment = "";
      if (char === "[") {
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
      } else if (char === ".") {
        // Start of property
        state = PathParserState.Property;
      } else if (index === 0) {
        // Start of property, but at the first path
        state = PathParserState.Property;
        currentSegment = char;
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
