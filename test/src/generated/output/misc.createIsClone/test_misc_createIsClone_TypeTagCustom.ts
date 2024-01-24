import typia from "typia";

import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { TypeTagCustom } from "../../../structures/TypeTagCustom";

export const test_misc_createIsClone_TypeTagCustom = _test_misc_isClone(
  "TypeTagCustom",
)<TypeTagCustom>(TypeTagCustom)(
  (input: any): typia.Resolved<TypeTagCustom> | null => {
    const is = (input: any): input is TypeTagCustom => {
      return (
        "object" === typeof input &&
        null !== input &&
        "string" === typeof (input as any).id &&
        /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
          (input as any).id,
        ) &&
        "string" === typeof (input as any).dollar &&
        (input as any).dollar[0] === "$" &&
        !isNaN(
          Number((input as any).dollar.substring(1).split(",").join("")),
        ) &&
        "string" === typeof (input as any).postfix &&
        (input as any).postfix.endsWith("abcd") &&
        "number" === typeof (input as any).powerOf &&
        Number.isFinite((input as any).powerOf) &&
        (() => {
          const denominator: number = Math.log(2);
          const value: number = Math.log((input as any).powerOf) / denominator;
          return Math.abs(value - Math.round(value)) < 1e-8;
        })()
      );
    };
    const clone = (input: TypeTagCustom): typia.Resolved<TypeTagCustom> => {
      const $co0 = (input: any): any => ({
        id: input.id as any,
        dollar: input.dollar as any,
        postfix: input.postfix as any,
        powerOf: input.powerOf as any,
      });
      return "object" === typeof input && null !== input
        ? $co0(input)
        : (input as any);
    };
    if (!is(input)) return null;
    const output = clone(input);
    return output;
  },
);
