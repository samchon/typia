import "typia";
var _isFormatEmail = {};
var hasRequired_isFormatEmail;
function require_isFormatEmail() {
  if (hasRequired_isFormatEmail) return _isFormatEmail;
  hasRequired_isFormatEmail = 1;
  Object.defineProperty(_isFormatEmail, "__esModule", { value: true });
  _isFormatEmail._isFormatEmail = void 0;
  const _isFormatEmail$1 = (str) => PATTERN.test(str);
  _isFormatEmail._isFormatEmail = _isFormatEmail$1;
  const PATTERN = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
  return _isFormatEmail;
}
var _isFormatEmailExports = /* @__PURE__ */ require_isFormatEmail();
var _isFormatUuid = {};
var hasRequired_isFormatUuid;
function require_isFormatUuid() {
  if (hasRequired_isFormatUuid) return _isFormatUuid;
  hasRequired_isFormatUuid = 1;
  Object.defineProperty(_isFormatUuid, "__esModule", { value: true });
  _isFormatUuid._isFormatUuid = void 0;
  const _isFormatUuid$1 = (str) => PATTERN.test(str);
  _isFormatUuid._isFormatUuid = _isFormatUuid$1;
  const PATTERN = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i;
  return _isFormatUuid;
}
var _isFormatUuidExports = /* @__PURE__ */ require_isFormatUuid();
var _isTypeUint32 = {};
var hasRequired_isTypeUint32;
function require_isTypeUint32() {
  if (hasRequired_isTypeUint32) return _isTypeUint32;
  hasRequired_isTypeUint32 = 1;
  Object.defineProperty(_isTypeUint32, "__esModule", { value: true });
  _isTypeUint32._isTypeUint32 = void 0;
  const _isTypeUint32$1 = (value) => Math.floor(value) === value && MINIMUM <= value && value <= MAXIMUM;
  _isTypeUint32._isTypeUint32 = _isTypeUint32$1;
  const MINIMUM = 0;
  const MAXIMUM = Math.pow(2, 32) - 1;
  return _isTypeUint32;
}
var _isTypeUint32Exports = /* @__PURE__ */ require_isTypeUint32();
var _validateReport = {};
var hasRequired_validateReport;
function require_validateReport() {
  if (hasRequired_validateReport) return _validateReport;
  hasRequired_validateReport = 1;
  Object.defineProperty(_validateReport, "__esModule", { value: true });
  _validateReport._validateReport = void 0;
  const _validateReport$1 = (array) => {
    const reportable = (path) => {
      if (array.length === 0)
        return true;
      const last = array[array.length - 1].path;
      return path.length > last.length || last.substring(0, path.length) !== path;
    };
    return (exceptable, error) => {
      if (exceptable && reportable(error.path))
        array.push(error);
      return false;
    };
  };
  _validateReport._validateReport = _validateReport$1;
  return _validateReport;
}
var _validateReportExports = /* @__PURE__ */ require_validateReport();
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
const validate = (() => {
  const _io0 = (input) => "string" === typeof input.email && _isFormatEmailExports._isFormatEmail(input.email) && ("string" === typeof input.id && _isFormatUuidExports._isFormatUuid(input.id)) && ("number" === typeof input.age && (_isTypeUint32Exports._isTypeUint32(input.age) && 19 < input.age && input.age <= 100));
  const _vo0 = (input, _path, _exceptionable = true) => ["string" === typeof input.email && (_isFormatEmailExports._isFormatEmail(input.email) || _report(_exceptionable, {
    path: _path + ".email",
    expected: 'string & Format<"email">',
    value: input.email
  })) || _report(_exceptionable, {
    path: _path + ".email",
    expected: '(string & Format<"email">)',
    value: input.email
  }), "string" === typeof input.id && (_isFormatUuidExports._isFormatUuid(input.id) || _report(_exceptionable, {
    path: _path + ".id",
    expected: 'string & Format<"uuid">',
    value: input.id
  })) || _report(_exceptionable, {
    path: _path + ".id",
    expected: '(string & Format<"uuid">)',
    value: input.id
  }), "number" === typeof input.age && (_isTypeUint32Exports._isTypeUint32(input.age) || _report(_exceptionable, {
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
  return _createStandardSchemaExports._createStandardSchema((input) => {
    if (false === __is(input)) {
      errors = [];
      _report = _validateReportExports._validateReport(errors);
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
