const _isFormatEmail = (str) => PATTERN$1.test(str);
const PATTERN$1 = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
const _isFormatUuid = (str) => PATTERN.test(str);
const PATTERN = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i;
const _isTypeUint32 = (value) => Math.floor(value) === value && MINIMUM <= value && value <= MAXIMUM;
const MINIMUM = 0;
const MAXIMUM = 2 ** 32 - 1;
const is = /* @__PURE__ */ (() => {
  const _io0 = (input) => "string" === typeof input.email && _isFormatEmail(input.email) && ("string" === typeof input.id && _isFormatUuid(input.id)) && ("number" === typeof input.age && (_isTypeUint32(input.age) && 19 < input.age && input.age <= 100));
  return (input) => "object" === typeof input && null !== input && _io0(input);
})();
is({});
