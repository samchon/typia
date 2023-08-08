import typia from "../../../../src";
import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_json_isParse_ObjectLiteralProperty = _test_json_isParse(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (input: any): typia.Primitive<ObjectLiteralProperty> => {
        const is = (input: any): input is ObjectLiteralProperty => {
            return (
                "object" === typeof input &&
                null !== input &&
                "string" ===
                    typeof (input as any)[
                        "something-interesting-do-you-want?"
                    ] &&
                "string" ===
                    typeof (input as any)["or-something-crazy-do-you-want?"]
            );
        };
        input = JSON.parse(input);
        return is(input) ? (input as any) : null;
    },
    ObjectLiteralProperty.SPOILERS,
);
