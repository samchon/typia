import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_is_ObjectLiteralProperty = _test_is<ObjectLiteralProperty>(
    ObjectLiteralProperty,
)((input) =>
    ((input: any): input is ObjectLiteralProperty => {
        return (
            "object" === typeof input &&
            null !== input &&
            "string" ===
                typeof (input as any)["something-interesting-do-you-want?"] &&
            "string" ===
                typeof (input as any)["or-something-crazy-do-you-want?"]
        );
    })(input),
);
