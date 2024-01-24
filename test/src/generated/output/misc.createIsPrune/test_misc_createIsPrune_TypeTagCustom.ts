import typia from "typia";

import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { TypeTagCustom } from "../../../structures/TypeTagCustom";

export const test_misc_createIsPrune_TypeTagCustom = _test_misc_isPrune(
  "TypeTagCustom",
)<TypeTagCustom>(TypeTagCustom)((input: any): input is TypeTagCustom => {
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
      !isNaN(Number((input as any).dollar.substring(1).split(",").join(""))) &&
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
  const prune = (input: TypeTagCustom): void => {
    const $po0 = (input: any): any => {
      for (const key of Object.keys(input)) {
        if (
          "id" === key ||
          "dollar" === key ||
          "postfix" === key ||
          "powerOf" === key
        )
          continue;
        delete input[key];
      }
    };
    if ("object" === typeof input && null !== input) $po0(input);
  };
  if (!is(input)) return false;
  prune(input);
  return true;
});
