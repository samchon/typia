import typia from "typia";

import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_ObjectInternal = _test_validateParse(
    "ObjectInternal",
    ObjectInternal.generate,
    typia.createValidateParse<ObjectInternal>(),
    ObjectInternal.SPOILERS,
);
