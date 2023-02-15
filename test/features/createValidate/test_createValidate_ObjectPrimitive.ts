import typia from "typia";

import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_ObjectPrimitive = _test_validate(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    typia.createValidate<ObjectPrimitive>(),
    ObjectPrimitive.SPOILERS,
);
