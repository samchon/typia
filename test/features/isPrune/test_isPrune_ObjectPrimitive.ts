import typia from "../../../src";

import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_isPrune_ObjectPrimitive = _test_isPrune(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    (input) => typia.isPrune(input),
    ObjectPrimitive.SPOILERS,
);
