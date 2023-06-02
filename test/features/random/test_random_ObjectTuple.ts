import typia from "../../../src";

import { ObjectTuple } from "../../structures/ObjectTuple";
import { _test_random } from "../../internal/_test_random";

export const test_random_ObjectTuple = _test_random(
    "ObjectTuple",
    () => typia.random<ObjectTuple>(),
typia.createAssert<typia.Primitive<ObjectTuple>>(),
);
