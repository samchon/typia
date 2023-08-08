import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_random_ObjectRecursive = _test_random(
    "ObjectRecursive",
    typia.createRandom<ObjectRecursive>(),
    typia.createAssert<typia.Primitive<ObjectRecursive>>(),
);
