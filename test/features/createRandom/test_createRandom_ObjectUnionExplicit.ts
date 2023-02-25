import typia from "../../../src";

import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_random } from "../internal/_test_random";

export const test_createRandom_ObjectUnionExplicit = _test_random(
    "ObjectUnionExplicit",
    typia.createRandom<ObjectUnionExplicit>(),
    typia.createAssert<typia.Primitive<ObjectUnionExplicit>>(),
);
