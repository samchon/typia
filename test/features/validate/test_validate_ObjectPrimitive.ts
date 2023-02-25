import typia from "../../../src";

import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_ObjectPrimitive = _test_validate(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    (input) => typia.validate(input),
    ObjectPrimitive.SPOILERS,
);
