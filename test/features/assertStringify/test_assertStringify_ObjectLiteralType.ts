import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_assertStringify_ObjectLiteralType = _test_assertStringify(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    (input) => typia.assertStringify(input),
    ObjectLiteralType.SPOILERS,
);
