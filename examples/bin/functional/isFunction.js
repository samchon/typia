import typia from "typia";

const func = (() => {
  const __is_param_0 = (() => {
    return (input) => "number" === typeof input && Number.isFinite(input);
  })();
  const __is_param_1 = (() => {
    return (input) => "number" === typeof input && Number.isFinite(input);
  })();
  const __is_return = (() => {
    return (input) => "number" === typeof input && Number.isFinite(input);
  })();
  return (x, y) => {
    if (false === __is_param_0(x)) return null;
    if (false === __is_param_1(y)) return null;
    const result = ((x, y) => x + y)(x, y);
    return __is_return(result) ? result : null;
  };
})();
func(3, 4);
func(4, 5);
