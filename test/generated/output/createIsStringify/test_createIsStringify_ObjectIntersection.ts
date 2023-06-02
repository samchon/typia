import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_createIsStringify_ObjectIntersection = _test_isStringify(
    "ObjectIntersection",
    ObjectIntersection.generate,
    (input: ObjectIntersection): string | null => {
        const is: any = (input: any): input is ObjectIntersection => {
            return (
                "object" === typeof input &&
                null !== input &&
                "string" === typeof input.email &&
                "string" === typeof input.name &&
                "boolean" === typeof input.vulnerable
            );
        };
        const stringify: any = (input: ObjectIntersection): string => {
            const $string: any = (typia.createIsStringify as any).string;
            return `{"email":${$string(input.email)},"name":${$string(
                input.name,
            )},"vulnerable":${input.vulnerable}}`;
        };
        return is(input) ? stringify(input) : null;
    },
    ObjectIntersection.SPOILERS,
);
