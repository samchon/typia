import typia from "../../../src";

import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_random } from "../../internal/_test_random";

export const test_createRandom_ObjectUnionNonPredictable = _test_random(
    "ObjectUnionNonPredictable",
    typia.createRandom<ObjectUnionNonPredictable>(),
typia.createAssert<typia.Primitive<ObjectUnionNonPredictable>>(),
);
