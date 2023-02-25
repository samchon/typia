import typia from "../../../src";

import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_ObjectSimple = _test_validateParse(
    "ObjectSimple",
    ObjectSimple.generate,
    typia.createValidateParse<ObjectSimple>(),
    ObjectSimple.SPOILERS,
);
