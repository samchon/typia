import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_createAssertStringify_ObjectLiteralType =
    _test_assertStringify(
        "ObjectLiteralType",
        ObjectLiteralType.generate,
        typia.createAssertStringify<ObjectLiteralType>(),
        ObjectLiteralType.SPOILERS,
    );
