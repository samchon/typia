import typia from "../../../../src";
import { ClassMethod } from "../../../structures/ClassMethod";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_ClassMethod = _test_clone(
    "ClassMethod",
    ClassMethod.generate,
    (input: ClassMethod.Animal): typia.Primitive<ClassMethod.Animal> => {
        const $co0 = (input: any): any => ({
            name: input.name as any,
            age: input.age as any,
        });
        return "object" === typeof input && null !== input
            ? $co0(input)
            : (input as any);
    },
);
