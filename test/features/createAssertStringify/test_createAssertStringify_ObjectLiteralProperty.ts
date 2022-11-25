import TSON from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_ObjectLiteralProperty =
    _test_assertStringify(
        "ObjectLiteralProperty",
        ObjectLiteralProperty.generate,
        TSON.createAssertStringify<ObjectLiteralProperty>(),
        ObjectLiteralProperty.SPOILERS,
    );
