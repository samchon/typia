import typia from "typia";

(() => {
  return (input) =>
    input instanceof Map &&
    (() =>
      [...input].every(
        (elem) =>
          Array.isArray(elem) &&
          elem.length === 2 &&
          "string" === typeof elem[0] &&
          ("string" === typeof elem[1] ||
            ("number" === typeof elem[1] && Number.isFinite(elem[1])) ||
            "boolean" === typeof elem[1]),
      ))();
})();
