const _createStandardSchema = (fn) => Object.assign(fn, {
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
const typiaPathToStandardSchemaPath = (path) => {
  if (!path.startsWith("$input")) {
    throw new Error(`Invalid path: ${JSON.stringify(path)}`);
  }
  const segments = [];
  let currentSegment = "";
  let state = 0;
  let index = "$input".length - 1;
  while (index < path.length - 1) {
    index++;
    const char = path[index];
    if (state === 1) {
      if (char === "." || char === "[") {
        segments.push({
          key: currentSegment
        });
        state = 0;
      } else if (index === path.length - 1) {
        currentSegment += char;
        segments.push({
          key: currentSegment
        });
        index++;
        state = 0;
      } else {
        currentSegment += char;
      }
    } else if (state === 2) {
      if (char === '"') {
        segments.push({
          key: JSON.parse(currentSegment + char)
        });
        index += 2;
        state = 0;
      } else if (char === "\\") {
        currentSegment += path[index];
        index++;
        currentSegment += path[index];
      } else {
        currentSegment += char;
      }
    } else if (state === 3) {
      if (char === "]") {
        segments.push({
          key: Number.parseInt(currentSegment)
        });
        index++;
        state = 0;
      } else {
        currentSegment += char;
      }
    }
    if (state === 0 && index < path.length - 1) {
      const newChar = path[index];
      currentSegment = "";
      if (newChar === "[") {
        if (path[index + 1] === '"') {
          state = 2;
          index++;
          currentSegment = '"';
        } else {
          state = 3;
        }
      } else if (newChar === ".") {
        state = 1;
      } else {
        throw new Error("Unreachable: pointer points invalid character");
      }
    }
  }
  if (state !== 0) {
    throw new Error(`Failed to parse path: ${JSON.stringify(path)}`);
  }
  return segments;
};
const random = /* @__PURE__ */ (() => {
  let _generator;
  return (generator) => {
    _generator = generator;
    return "any type used...";
  };
})();
const validate = (() => {
  return _createStandardSchema((input) => {
    return {
      success: true,
      data: input
    };
  });
})();
validate({});
random();
