import typia from "typia";

import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_random } from "../internal/_test_random";

export const test_createRandom_ObjectOptional = _test_random(
    "ObjectOptional",
    typia.createRandom<ObjectOptional>(),
    typia.createAssert<typia.Primitive<ObjectOptional>>(),
);
