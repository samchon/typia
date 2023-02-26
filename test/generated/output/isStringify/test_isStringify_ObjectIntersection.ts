import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_isStringify_ObjectIntersection = _test_isStringify(
    "ObjectIntersection",
    ObjectIntersection.generate,
    (input) =>
        ((
            input: ObjectIntersection.IEmail & ObjectIntersection.IName,
        ): string | null => {
            const is = (input: any): input is ObjectIntersection => {
                return (
                    "object" === typeof input &&
                    null !== input &&
                    "string" === typeof input.email &&
                    "string" === typeof input.name &&
                    "boolean" === typeof input.vulnerable
                );
            };
            const stringify = (input: ObjectIntersection): string => {
                const $string = (typia.isStringify as any).string;
                return `{"email":${$string(input.email)},"name":${$string(
                    input.name,
                )},"vulnerable":${input.vulnerable}}`;
            };
            return is(input) ? stringify(input) : null;
        })(input),
    ObjectIntersection.SPOILERS,
);
