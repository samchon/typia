import typia from "typia";

import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_random } from "../internal/_test_random";

export const test_createRandom_ObjectUnionDouble = _test_random(
    "ObjectUnionDouble",
    typia.createRandom<ObjectUnionDouble>(),
    typia.createAssert<typia.Primitive<ObjectUnionDouble>>(),
);
