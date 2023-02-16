import typia from "typia";

import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_createAssertPrune_ObjectLiteralType = _test_assertPrune(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    typia.createAssertPrune<ObjectLiteralType>(),
    ObjectLiteralType.SPOILERS,
);
