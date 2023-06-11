import typia from "../../../../src";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";
import { _test_clone } from "../../../internal/_test_clone";
export const test_createClone_ConstantConstEnumeration = _test_clone("ConstantConstEnumeration", ConstantConstEnumeration.generate, (input: ConstantConstEnumeration): typia.Primitive<ConstantConstEnumeration> => {
    const $cp0 = (input: any) => input.map((elem: any) => elem as any);
    return Array.isArray(input) ? $cp0(input) : input as any;
});
