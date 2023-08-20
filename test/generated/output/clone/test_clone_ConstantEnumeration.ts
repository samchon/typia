import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";

export const test_clone_ConstantEnumeration = _test_clone(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    (input) =>
        ((input: ConstantEnumeration): typia.Primitive<ConstantEnumeration> => {
            const $cp0 = (input: any) => input.map((elem: any) => elem as any);
            return Array.isArray(input) ? $cp0(input) : (input as any);
        })(input),
);
