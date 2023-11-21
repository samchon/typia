import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ObjectHttpConstant } from "../../../structures/ObjectHttpConstant";

export const test_createIs_ObjectHttpConstant = _test_is(
  "ObjectHttpConstant",
)<ObjectHttpConstant>(ObjectHttpConstant)(
  (input: any): input is ObjectHttpConstant => {
    const $io0 = (input: any): boolean =>
      false === input.boolean &&
      (BigInt(1) === input.bigint || BigInt(99) === input.bigint) &&
      (2 === input.number || 98 === input.number) &&
      ("something" === input.string ||
        "three" === input.string ||
        "ninety-seven" === input.string) &&
      "string" === typeof input.template &&
      RegExp(/^abcd_(.*)/).test(input.template);
    return "object" === typeof input && null !== input && $io0(input);
  },
);
