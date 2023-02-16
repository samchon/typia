import typia from "typia";

import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_ObjectPrimitive = _test_validateParse(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    typia.createValidateParse<ObjectPrimitive>(),
    ObjectPrimitive.SPOILERS,
);
