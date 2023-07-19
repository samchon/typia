import typia from "../../../../src";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_json_isStringify_ClassMethod =
    _test_json_isStringify<ClassMethod>(ClassMethod)((input) =>
        ((input: ClassMethod.Animal): string | null => {
            const is = (input: any): input is ClassMethod.Animal => {
                return (
                    "object" === typeof input &&
                    null !== input &&
                    "string" === typeof (input as any).name &&
                    "number" === typeof (input as any).age &&
                    Number.isFinite((input as any).age)
                );
            };
            const stringify = (input: ClassMethod.Animal): string => {
                const $string = (typia.json.isStringify as any).string;
                const $number = (typia.json.isStringify as any).number;
                return `{"name":${$string((input as any).name)},"age":${$number(
                    (input as any).age,
                )}}`;
            };
            return is(input) ? stringify(input) : null;
        })(input),
    );
