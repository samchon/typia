const _isFormatEmail = (str) => PATTERN$1.test(str);
const PATTERN$1 = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
const _isFormatUuid = (str) => PATTERN.test(str);
const PATTERN = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i;
const _isTypeUint32 = (value) => Math.floor(value) === value && MINIMUM <= value && value <= MAXIMUM;
const MINIMUM = 0;
const MAXIMUM = 2 ** 32 - 1;
const _validateReport = (array) => {
  const reportable = (path) => {
    if (array.length === 0)
      return true;
    const last = array[array.length - 1].path;
    return path.length > last.length || last.substring(0, path.length) !== path;
  };
  return (exceptable, error) => {
    if (exceptable && reportable(error.path)) {
      if (error.value === void 0)
        error.description ?? (error.description = [
          "The value at this path is `undefined`.",
          "",
          `Please fill the \`${error.expected}\` typed value next time.`
        ].join("\n"));
      array.push(error);
    }
    return false;
  };
};
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
const validate = (() => {
  const _io0 = (input) => "string" === typeof input.email && _isFormatEmail(input.email) && ("string" === typeof input.id && _isFormatUuid(input.id)) && ("number" === typeof input.age && (_isTypeUint32(input.age) && 19 < input.age && input.age <= 100));
  const _vo0 = (input, _path, _exceptionable = true) => ["string" === typeof input.email && (_isFormatEmail(input.email) || _report(_exceptionable, {
    path: _path + ".email",
    expected: 'string & Format<"email">',
    value: input.email
  })) || _report(_exceptionable, {
    path: _path + ".email",
    expected: '(string & Format<"email">)',
    value: input.email
  }), "string" === typeof input.id && (_isFormatUuid(input.id) || _report(_exceptionable, {
    path: _path + ".id",
    expected: 'string & Format<"uuid">',
    value: input.id
  })) || _report(_exceptionable, {
    path: _path + ".id",
    expected: '(string & Format<"uuid">)',
    value: input.id
  }), "number" === typeof input.age && (_isTypeUint32(input.age) || _report(_exceptionable, {
    path: _path + ".age",
    expected: 'number & Type<"uint32">',
    value: input.age
  })) && (19 < input.age || _report(_exceptionable, {
    path: _path + ".age",
    expected: "number & ExclusiveMinimum<19>",
    value: input.age
  })) && (input.age <= 100 || _report(_exceptionable, {
    path: _path + ".age",
    expected: "number & Maximum<100>",
    value: input.age
  })) || _report(_exceptionable, {
    path: _path + ".age",
    expected: '(number & Type<"uint32"> & ExclusiveMinimum<19> & Maximum<100>)',
    value: input.age
  })].every((flag) => flag);
  const __is = (input) => "object" === typeof input && null !== input && _io0(input);
  let errors;
  let _report;
  return _createStandardSchema((input) => {
    if (false === __is(input)) {
      errors = [];
      _report = _validateReport(errors);
      ((input2, _path, _exceptionable = true) => ("object" === typeof input2 && null !== input2 || _report(true, {
        path: _path + "",
        expected: "IMember",
        value: input2
      })) && _vo0(input2, _path + "", true) || _report(true, {
        path: _path + "",
        expected: "IMember",
        value: input2
      }))(input, "$input", true);
      const success = 0 === errors.length;
      return success ? {
        success,
        data: input
      } : {
        success,
        errors,
        data: input
      };
    }
    return {
      success: true,
      data: input
    };
  });
})();
validate({});
