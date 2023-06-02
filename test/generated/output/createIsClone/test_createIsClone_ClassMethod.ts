import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_createIsClone_ClassMethod = _test_isClone(
    "ClassMethod",
    ClassMethod.generate,
    (input: any): typia.Primitive<ClassMethod> | null => {
        const is: any = (input: any): input is ClassMethod => {
            return (
                "object" === typeof input &&
                null !== input &&
                "string" === typeof input.name &&
                "number" === typeof input.age &&
                Number.isFinite(input.age)
            );
        };
        const clone: any = (
            input: ClassMethod,
        ): typia.Primitive<ClassMethod> => {
            const $co0: any = (input: any): any => ({
                name: input.name as any,
                age: input.age as any,
            });
            return "object" === typeof input && null !== input
                ? $co0(input)
                : (input as any);
        };
        if (!is(input)) return null;
        const output: any = clone(input);
        return output;
    },
    ClassMethod.SPOILERS,
);
