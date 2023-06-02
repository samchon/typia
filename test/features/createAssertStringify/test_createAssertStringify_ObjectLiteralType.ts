import typia from "../../../src";

import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_assertStringify } from "../../internal/_test_assertStringify";

export const test_createAssertStringify_ObjectLiteralType = _test_assertStringify(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    typia.createAssertStringify<ObjectLiteralType>(),
    ObjectLiteralType.SPOILERS,
);
