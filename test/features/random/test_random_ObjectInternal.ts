import typia from "typia";

import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_random } from "../internal/_test_random";

export const test_random_ObjectInternal = _test_random(
    "ObjectInternal",
    () => typia.random<ObjectInternal>(),
    typia.createAssert<typia.Primitive<ObjectInternal>>(),
);
