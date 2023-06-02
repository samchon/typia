import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";

export const test_createIsStringify_ObjectLiteralType = _test_isStringify(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    (input: ObjectLiteralType): string | null => {
        const is: any = (input: any): input is ObjectLiteralType => {
            return (
                "object" === typeof input &&
                null !== input &&
                "string" === typeof input.id &&
                "string" === typeof input.name &&
                "number" === typeof input.age &&
                Number.isFinite(input.age)
            );
        };
        const stringify: any = (input: ObjectLiteralType): string => {
            const $string: any = (typia.createIsStringify as any).string;
            const $number: any = (typia.createIsStringify as any).number;
            return `{"id":${$string(input.id)},"name":${$string(
                input.name,
            )},"age":${$number(input.age)}}`;
        };
        return is(input) ? stringify(input) : null;
    },
    ObjectLiteralType.SPOILERS,
);
