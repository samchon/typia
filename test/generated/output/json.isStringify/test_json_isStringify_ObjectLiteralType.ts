import typia from "../../../../src";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";

export const test_json_isStringify_ObjectLiteralType =
    _test_json_isStringify<ObjectLiteralType>(ObjectLiteralType)((input) =>
        ((input: { id: string; name: string; age: number }): string | null => {
            const is = (
                input: any,
            ): input is { id: string; name: string; age: number } => {
                return (
                    "object" === typeof input &&
                    null !== input &&
                    "string" === typeof (input as any).id &&
                    "string" === typeof (input as any).name &&
                    "number" === typeof (input as any).age &&
                    Number.isFinite((input as any).age)
                );
            };
            const stringify = (input: {
                id: string;
                name: string;
                age: number;
            }): string => {
                const $string = (typia.json.isStringify as any).string;
                const $number = (typia.json.isStringify as any).number;
                return `{"id":${$string((input as any).id)},"name":${$string(
                    (input as any).name,
                )},"age":${$number((input as any).age)}}`;
            };
            return is(input) ? stringify(input) : null;
        })(input),
    );
