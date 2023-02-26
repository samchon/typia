import typia from "../../../../src";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";
import { _test_clone } from "../internal/_test_clone";

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
