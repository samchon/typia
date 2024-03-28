import typia from "typia";

import { _test_functional_isReturn } from "../../../internal/_test_functional_isReturn";
import { TypeTagCustom } from "../../../structures/TypeTagCustom";

export const test_functional_isReturn_TypeTagCustom = _test_functional_isReturn(
  "TypeTagCustom",
)(TypeTagCustom)(
  (p: (input: TypeTagCustom) => TypeTagCustom) =>
    (input: TypeTagCustom): TypeTagCustom | null => {
      const result = p(input);
      return ((input: any): input is TypeTagCustom => {
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
            const value: number =
              Math.log((input as any).powerOf) / denominator;
            return Math.abs(value - Math.round(value)) < 1e-8;
          })()
        );
      })(result)
        ? result
        : null;
    },
);
