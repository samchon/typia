import typia from "../../../src";

import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_ObjectPrimitive = _test_isClone(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    typia.createIsClone<ObjectPrimitive>(),
    ObjectPrimitive.SPOILERS,
);
