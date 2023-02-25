import typia from "../../../src";

import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_random } from "../internal/_test_random";

export const test_random_ObjectRecursive = _test_random(
    "ObjectRecursive",
    () => typia.random<ObjectRecursive>(),
    typia.createAssert<typia.Primitive<ObjectRecursive>>(),
);
