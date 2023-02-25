import typia from "../../../../src";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_ObjectLiteralProperty = _test_isParse(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (input) =>
        ((input: any): typia.Primitive<ObjectLiteralProperty.ISomething> => {
            const is = (
                input: any,
            ): input is ObjectLiteralProperty.ISomething => {
                return (
                    "object" === typeof input &&
                    null !== input &&
                    "string" ===
                        typeof input["something-interesting-do-you-want?"] &&
                    "string" === typeof input["or-something-crazy-do-you-want?"]
                );
            };
            input = JSON.parse(input);
            return is(input) ? (input as any) : null;
        })(input),
    ObjectLiteralProperty.SPOILERS,
);
