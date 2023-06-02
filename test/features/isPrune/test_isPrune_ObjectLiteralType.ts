import typia from "../../../src";

import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_isPrune } from "../../internal/_test_isPrune";

export const test_isPrune_ObjectLiteralType = _test_isPrune(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    (input) => typia.isPrune(input),
    ObjectLiteralType.SPOILERS,
);
