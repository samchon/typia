import TSON from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_ObjectLiteralType = _test_assertStringify(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    TSON.createAssertStringify<ObjectLiteralType>(),
    ObjectLiteralType.SPOILERS,
);