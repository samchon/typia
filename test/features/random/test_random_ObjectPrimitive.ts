import typia from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_random } from "../internal/_test_random";

export const test_random_ObjectPrimitive = _test_random(
    "ObjectPrimitive",
    () => typia.random<ObjectPrimitive>(),
    typia.createAssert<typia.Primitive<ObjectPrimitive>>(),
);