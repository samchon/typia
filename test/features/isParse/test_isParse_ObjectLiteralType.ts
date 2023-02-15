import typia from "typia";

import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_ObjectLiteralType = _test_isParse(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    (input) => typia.isParse<ObjectLiteralType>(input),
    ObjectLiteralType.SPOILERS,
);
