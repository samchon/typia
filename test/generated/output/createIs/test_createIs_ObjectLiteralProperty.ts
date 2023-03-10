import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_createIs_ObjectLiteralProperty = _test_is(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (input: any): input is ObjectLiteralProperty => {
        return (
            "object" === typeof input &&
            null !== input &&
            "string" === typeof input["something-interesting-do-you-want?"] &&
            "string" === typeof input["or-something-crazy-do-you-want?"]
        );
    },
    ObjectLiteralProperty.SPOILERS,
);
