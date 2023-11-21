import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { TypeTagTypeBigInt } from "../../../structures/TypeTagTypeBigInt";

export const test_misc_prune_TypeTagTypeBigInt = _test_misc_prune(
  "TypeTagTypeBigInt",
)<TypeTagTypeBigInt>(TypeTagTypeBigInt)((input) =>
  ((input: TypeTagTypeBigInt): void => {
    const $po0 = (input: any): any => {
      for (const key of Object.keys(input)) {
        if ("in64" === key || "uint64" === key) continue;
        delete input[key];
      }
    };
    if ("object" === typeof input && null !== input) $po0(input);
  })(input),
);
