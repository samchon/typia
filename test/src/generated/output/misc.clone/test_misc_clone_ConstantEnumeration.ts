import typia from "typia";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";
export const test_misc_clone_ConstantEnumeration = _test_misc_clone(
  "ConstantEnumeration",
)<ConstantEnumeration>(ConstantEnumeration)((input) =>
  ((
    input: ConstantEnumeration,
  ): import("typia").Resolved<ConstantEnumeration> => {
    const $cp0 = (input: any) => input.map((elem: any) => elem as any);
    return Array.isArray(input) ? $cp0(input) : (input as any);
  })(input),
);
