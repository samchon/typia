import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_misc_createClone_ConstantConstEnumeration = _test_misc_clone(
  "ConstantConstEnumeration",
)<ConstantConstEnumeration>(ConstantConstEnumeration)(
  (
    input: ConstantConstEnumeration,
  ): typia.Resolved<ConstantConstEnumeration> => {
    const $cp0 = (input: any) => input.map((elem: any) => elem as any);
    return Array.isArray(input) ? $cp0(input) : (input as any);
  },
);
