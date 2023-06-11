import typia from "../../../src";

import { ObjectDynamic } from "../../structures/ObjectDynamic";
import { _test_random } from "../../internal/_test_random";

export const test_createRandom_ObjectDynamic = _test_random(
    "ObjectDynamic",
    typia.createRandom<ObjectDynamic>(),
typia.createAssert<typia.Primitive<ObjectDynamic>>(),
);
