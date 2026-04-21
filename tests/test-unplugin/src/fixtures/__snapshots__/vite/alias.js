var _createStandardSchema = {};
var hasRequired_createStandardSchema;
function require_createStandardSchema() {
  if (hasRequired_createStandardSchema) return _createStandardSchema;
  hasRequired_createStandardSchema = 1;
  Object.defineProperty(_createStandardSchema, "__esModule", { value: true });
  _createStandardSchema._createStandardSchema = void 0;
  const _createStandardSchema$1 = (fn) => Object.assign(fn, {
    "~standard": {
      version: 1,
      vendor: "typia",
      validate: (input) => {
        const result = fn(input);
        if (result.success) {
          return {
            value: result.data
          };
        } else {
          return {
            issues: result.errors.map((error) => ({
              message: `expected ${error.expected}, got ${error.value}`,
              path: typiaPathToStandardSchemaPath(error.path)
            }))
          };
        }
      }
    }
  });
  _createStandardSchema._createStandardSchema = _createStandardSchema$1;
  var PathParserState;
  (function(PathParserState2) {
    PathParserState2[PathParserState2["Start"] = 0] = "Start";
    PathParserState2[PathParserState2["Property"] = 1] = "Property";
    PathParserState2[PathParserState2["StringKey"] = 2] = "StringKey";
    PathParserState2[PathParserState2["NumberKey"] = 3] = "NumberKey";
  })(PathParserState || (PathParserState = {}));
  const typiaPathToStandardSchemaPath = (path) => {
    if (!path.startsWith("$input")) {
      throw new Error(`Invalid path: ${JSON.stringify(path)}`);
    }
    const segments = [];
    let currentSegment = "";
    let state = PathParserState.Start;
    let index = "$input".length - 1;
    while (index < path.length - 1) {
      index++;
      const char = path[index];
      if (state === PathParserState.Property) {
        if (char === "." || char === "[") {
          segments.push({
            key: currentSegment
          });
          state = PathParserState.Start;
        } else if (index === path.length - 1) {
          currentSegment += char;
          segments.push({
            key: currentSegment
          });
          index++;
          state = PathParserState.Start;
        } else {
          currentSegment += char;
        }
      } else if (state === PathParserState.StringKey) {
        if (char === '"') {
          segments.push({
            key: JSON.parse(currentSegment + char)
          });
          index += 2;
          state = PathParserState.Start;
        } else if (char === "\\") {
          currentSegment += path[index];
          index++;
          currentSegment += path[index];
        } else {
          currentSegment += char;
        }
      } else if (state === PathParserState.NumberKey) {
        if (char === "]") {
          segments.push({
            key: Number.parseInt(currentSegment)
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
            state = PathParserState.StringKey;
            index++;
            currentSegment = '"';
          } else {
            state = PathParserState.NumberKey;
          }
        } else if (newChar === ".") {
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
  return _createStandardSchema;
}
var _createStandardSchemaExports = /* @__PURE__ */ require_createStandardSchema();
const random = /* @__PURE__ */ (() => {
  let _generator;
  return (generator) => {
    _generator = generator;
    return "any type used...";
  };
})();
const validate = (() => {
  return _createStandardSchemaExports._createStandardSchema((input) => {
    return {
      success: true,
      data: input
    };
  });
})();
validate({});
random();
