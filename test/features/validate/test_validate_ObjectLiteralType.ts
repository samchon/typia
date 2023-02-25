import typia from "../../../src";

import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_ObjectLiteralType = _test_validate(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    (input) => typia.validate(input),
    ObjectLiteralType.SPOILERS,
);
