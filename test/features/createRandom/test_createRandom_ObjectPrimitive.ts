import typia from "../../../src";

import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_random } from "../internal/_test_random";

export const test_createRandom_ObjectPrimitive = _test_random(
    "ObjectPrimitive",
    typia.createRandom<ObjectPrimitive>(),
    typia.createAssert<typia.Primitive<ObjectPrimitive>>(),
);
