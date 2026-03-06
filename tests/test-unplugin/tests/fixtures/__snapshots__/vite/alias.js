const _isFormatEmail = (str) => PATTERN$1.test(str);
const PATTERN$1 = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
const _isFormatUuid = (str) => PATTERN.test(str);
const PATTERN = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i;
const _isTypeUint32 = (value) => Math.floor(value) === value && MINIMUM <= value && value <= MAXIMUM;
const MINIMUM = 0;
const MAXIMUM = 2 ** 32 - 1;
const _randomInteger = (schema) => {
  let minimum = schema.minimum ?? schema.exclusiveMinimum ?? (schema.multipleOf ?? 1) * (schema.maximum === void 0 && schema.exclusiveMaximum === void 0 ? 0 : (schema.maximum ?? schema.exclusiveMaximum) - 100);
  if (schema.exclusiveMinimum !== void 0)
    minimum++;
  let maximum = schema.maximum ?? schema.exclusiveMaximum ?? (schema.multipleOf ?? 1) * (schema.minimum === void 0 && schema.exclusiveMinimum === void 0 ? 100 : (schema.minimum ?? schema.exclusiveMinimum) + 100);
  if (schema.exclusiveMaximum !== void 0)
    maximum--;
  if (minimum > maximum)
    throw new Error("Minimum value is greater than maximum value.");
  return schema.multipleOf === void 0 ? scalar({
    minimum,
    maximum
  }) : multiple({
    minimum,
    maximum,
    multipleOf: schema.multipleOf
  });
};
const scalar = (p) => Math.floor(Math.random() * (p.maximum - p.minimum + 1)) + p.minimum;
const multiple = (p) => {
  const minimum = Math.ceil(p.minimum / p.multipleOf) * p.multipleOf;
  const maximum = Math.floor(p.maximum / p.multipleOf) * p.multipleOf;
  if (minimum > maximum)
    throw new Error("The range of the integer is smaller than the multipleOf value.");
  const value = scalar({
    minimum,
    maximum
  });
  return value - value % p.multipleOf;
};
const _randomString = (props) => {
  const length = _randomInteger({
    minimum: props.minLength ?? 0,
    maximum: props.maxLength
  });
  return new Array(length).fill(0).map(() => ALPHABETS[random$2()]).join("");
};
const ALPHABETS = "abcdefghijklmnopqrstuvwxyz";
const random$2 = () => _randomInteger({
  minimum: 0,
  maximum: ALPHABETS.length - 1
});
const _randomFormatEmail = () => `${random$1(10)}@${random$1(10)}.${random$1(3)}`;
const random$1 = (length) => _randomString({
  minLength: length,
  maxLength: length
});
const _randomFormatUuid = () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
  const r = Math.random() * 16 | 0;
  const v = c === "x" ? r : r & 3 | 8;
  return v.toString(16);
});
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
const is = /* @__PURE__ */ (() => {
  const _io0 = (input) => "string" === typeof input.email && _isFormatEmail(input.email) && ("string" === typeof input.id && _isFormatUuid(input.id)) && ("number" === typeof input.age && (_isTypeUint32(input.age) && 19 < input.age && input.age <= 100));
  return (input) => "object" === typeof input && null !== input && _io0(input);
})();
const random = /* @__PURE__ */ (() => {
  const _ro0 = (_recursive = false, _depth = 0) => ({
    email: ((_generator == null ? void 0 : _generator.email) ?? _randomFormatEmail)(),
    id: ((_generator == null ? void 0 : _generator.uuid) ?? _randomFormatUuid)(),
    age: ((_generator == null ? void 0 : _generator.integer) ?? _randomInteger)({
      type: "integer",
      minimum: 0,
      exclusiveMinimum: 19,
      maximum: 100
    })
  });
  let _generator;
  return (generator) => {
    _generator = generator;
    return _ro0();
  };
})();
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
is({});
validate({});
random();
