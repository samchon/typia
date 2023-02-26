import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_createIsClone_ClassMethod = _test_isClone(
    "ClassMethod",
    ClassMethod.generate,
    (input: any): typia.Primitive<ClassMethod.Animal> | null => {
        const is = (input: any): input is ClassMethod.Animal => {
            return (
                "object" === typeof input &&
                null !== input &&
                "string" === typeof input.name &&
                "number" === typeof input.age &&
                Number.isFinite(input.age)
            );
        };
        const clone = (
            input: ClassMethod.Animal,
        ): typia.Primitive<ClassMethod.Animal> => {
            const $co0 = (input: any): any => ({
                name: input.name as any,
                age: input.age as any,
            });
            return "object" === typeof input && null !== input
                ? $co0(input)
                : (input as any);
        };
        if (!is(input)) return null;
        const output = clone(input);
        return output;
    },
    ClassMethod.SPOILERS,
);
