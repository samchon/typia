import typia from "typia";

import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_random } from "../internal/_test_random";

export const test_random_ObjectGenericArray = _test_random(
    "ObjectGenericArray",
    () => typia.random<ObjectGenericArray>(),
    typia.createAssert<typia.Primitive<ObjectGenericArray>>(),
);
