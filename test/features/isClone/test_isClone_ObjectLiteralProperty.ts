import typia from "../../../src";

import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_ObjectLiteralProperty = _test_isClone(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (input) => typia.isClone(input),
    ObjectLiteralProperty.SPOILERS,
);
