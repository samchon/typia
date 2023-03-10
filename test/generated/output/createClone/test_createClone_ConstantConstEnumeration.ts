import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_createClone_ConstantConstEnumeration = _test_clone(
    "ConstantConstEnumeration",
    ConstantConstEnumeration.generate,
    (
        input: ConstantConstEnumeration,
    ): typia.Primitive<ConstantConstEnumeration> => {
        return Array.isArray(input)
            ? input.map((elem: any) => elem as any)
            : (input as any);
    },
);
