import typia from "typia";

import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_ObjectLiteralType = _test_validateEquals(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    (input) => typia.validateEquals(input),
);
