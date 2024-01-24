import typia from "typia";

import { _test_equals } from "../../../internal/_test_equals";
import { TypeTagCustom } from "../../../structures/TypeTagCustom";

export const test_createEquals_TypeTagCustom = _test_equals(
  "TypeTagCustom",
)<TypeTagCustom>(TypeTagCustom)(
  (input: any, _exceptionable: boolean = true): input is TypeTagCustom => {
    const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
      "string" === typeof input.id &&
      /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
        input.id,
      ) &&
      "string" === typeof input.dollar &&
      input.dollar[0] === "$" &&
      !isNaN(Number(input.dollar.substring(1).split(",").join(""))) &&
      "string" === typeof input.postfix &&
      input.postfix.endsWith("abcd") &&
      "number" === typeof input.powerOf &&
      Number.isFinite(input.powerOf) &&
      (() => {
        const denominator: number = Math.log(2);
        const value: number = Math.log(input.powerOf) / denominator;
        return Math.abs(value - Math.round(value)) < 1e-8;
      })() &&
      (4 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (
            ["id", "dollar", "postfix", "powerOf"].some(
              (prop: any) => key === prop,
            )
          )
            return true;
          const value = input[key];
          if (undefined === value) return true;
          return false;
        }));
    return "object" === typeof input && null !== input && $io0(input, true);
  },
);
