import typia from "typia";

import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_isPrune_ObjectLiteralProperty = _test_isPrune(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (input) => typia.isPrune(input),
    ObjectLiteralProperty.SPOILERS,
);
