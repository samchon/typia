import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_clone_ConstantConstEnumeration = _test_clone(
    "ConstantConstEnumeration",
    ConstantConstEnumeration.generate,
    (input) =>
        ((
            input: ConstantConstEnumeration,
        ): typia.Primitive<ConstantConstEnumeration> => {
            const $cp0 = (input: any) => input.map((elem: any) => elem as any);
            return Array.isArray(input) ? $cp0(input) : (input as any);
        })(input),
);
