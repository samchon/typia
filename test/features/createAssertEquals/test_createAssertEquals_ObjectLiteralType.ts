import typia from "../../../src";

import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_ObjectLiteralType = _test_assertEquals(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    typia.createAssertEquals<ObjectLiteralType>(),
);
