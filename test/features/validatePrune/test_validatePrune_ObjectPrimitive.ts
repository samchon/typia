import typia from "../../../src";

import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_validatePrune_ObjectPrimitive = _test_validatePrune(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    (input) => typia.validatePrune(input),
    ObjectPrimitive.SPOILERS,
);
