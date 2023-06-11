import typia from "../../../src";

import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_assert } from "../../internal/_test_assert";

export const test_createAssert_ObjectLiteralType = _test_assert(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    typia.createAssert<ObjectLiteralType>(),
    ObjectLiteralType.SPOILERS,
);
