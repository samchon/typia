import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_isStringify_ClassMethod = _test_isStringify(
    "ClassMethod",
    ClassMethod.generate,
    (input) =>
        ((input: ClassMethod.Animal): string | null => {
            const is: any = (input: any): input is ClassMethod.Animal => {
                return (
                    "object" === typeof input &&
                    null !== input &&
                    "string" === typeof input.name &&
                    "number" === typeof input.age &&
                    Number.isFinite(input.age)
                );
            };
            const stringify: any = (input: ClassMethod.Animal): string => {
                const $string: any = (typia.isStringify as any).string;
                const $number: any = (typia.isStringify as any).number;
                return `{"name":${$string(input.name)},"age":${$number(
                    input.age,
                )}}`;
            };
            return is(input) ? stringify(input) : null;
        })(input),
    ClassMethod.SPOILERS,
);
