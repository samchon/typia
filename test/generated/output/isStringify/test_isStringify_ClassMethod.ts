import typia from "../../../../src";
import { ClassMethod } from "../../../structures/ClassMethod";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_ClassMethod = _test_isStringify(
    "ClassMethod",
    ClassMethod.generate,
    (input) =>
        ((input: ClassMethod.Animal): string | null => {
            const is = (input: any): input is ClassMethod.Animal => {
                return (
                    "object" === typeof input &&
                    null !== input &&
                    "string" === typeof input.name &&
                    "number" === typeof input.age &&
                    Number.isFinite(input.age)
                );
            };
            const stringify = (input: ClassMethod.Animal): string => {
                const $string = (typia.isStringify as any).string;
                const $number = (typia.isStringify as any).number;
                return `{"name":${$string(input.name)},"age":${$number(
                    input.age,
                )}}`;
            };
            return is(input) ? stringify(input) : null;
        })(input),
    ClassMethod.SPOILERS,
);
