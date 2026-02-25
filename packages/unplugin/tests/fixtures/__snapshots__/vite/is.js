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
const is = /* @__PURE__ */ (() => {
  const _io0 = (input) => "string" === typeof input.email && _isFormatEmailExports._isFormatEmail(input.email) && ("string" === typeof input.id && _isFormatUuidExports._isFormatUuid(input.id)) && ("number" === typeof input.age && (_isTypeUint32Exports._isTypeUint32(input.age) && 19 < input.age && input.age <= 100));
  return (input) => "object" === typeof input && null !== input && _io0(input);
})();
is({});
