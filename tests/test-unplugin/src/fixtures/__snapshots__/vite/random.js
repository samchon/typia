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
random();
