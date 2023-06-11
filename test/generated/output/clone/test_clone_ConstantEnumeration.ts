import typia from "../../../../src";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";
import { _test_clone } from "../../../internal/_test_clone";
export const test_clone_ConstantEnumeration = _test_clone("ConstantEnumeration", ConstantEnumeration.generate, (input) => ((input: Array<ConstantEnumeration.Enumeration>): typia.Primitive<Array<ConstantEnumeration.Enumeration>> => {
    const $cp0 = (input: any) => input.map((elem: any) => elem as any);
    return Array.isArray(input) ? $cp0(input) : input as any;
})(input));
