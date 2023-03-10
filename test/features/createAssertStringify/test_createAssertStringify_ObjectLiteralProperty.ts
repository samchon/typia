import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_createAssertStringify_ObjectLiteralProperty =
    _test_assertStringify(
        "ObjectLiteralProperty",
        ObjectLiteralProperty.generate,
        typia.createAssertStringify<ObjectLiteralProperty>(),
        ObjectLiteralProperty.SPOILERS,
    );
