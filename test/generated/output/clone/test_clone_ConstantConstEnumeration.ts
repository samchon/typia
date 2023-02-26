import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_clone_ConstantConstEnumeration = _test_clone(
    "ConstantConstEnumeration",
    ConstantConstEnumeration.generate,
    (input) =>
        ((
            input: Array<ConstantConstEnumeration.Enumeration>,
        ): typia.Primitive<Array<ConstantConstEnumeration.Enumeration>> => {
            return Array.isArray(input)
                ? input.map((elem: any) => elem as any)
                : (input as any);
        })(input),
);
