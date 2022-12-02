import TSON from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_ObjectLiteralType = _test_assertStringify(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    (input) => TSON.assertStringify(input),
    ObjectLiteralType.SPOILERS,
);
