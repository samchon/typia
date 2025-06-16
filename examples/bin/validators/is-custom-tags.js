import typia from "typia";

export const checkSomething = (() => {
  const _io0 = (input) =>
    "string" === typeof input.dollar &&
    input.dollar[0] === "$" &&
    !isNaN(Number(input.dollar.substring(1).split(",").join(""))) &&
    "string" === typeof input.postfix &&
    input.postfix.endsWith("!!!") &&
    "number" === typeof input.isEven &&
    Number.isFinite(input.isEven) &&
    input.isEven % 2 === 0;
  return (input) => "object" === typeof input && null !== input && _io0(input);
})();
