import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_assertStringify_ObjectLiteralProperty = _test_assertStringify(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (input) => typia.assertStringify(input),
    ObjectLiteralProperty.SPOILERS,
);
