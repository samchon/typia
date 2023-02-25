import typia from "../../../src";

import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_ObjectLiteralType = _test_assertClone(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    (input) => typia.assertClone(input),
    ObjectLiteralType.SPOILERS,
);
