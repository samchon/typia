import typia from "typia";

import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_ObjectLiteralType = _test_validateEquals(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    typia.createValidateEquals<ObjectLiteralType>(),
);
