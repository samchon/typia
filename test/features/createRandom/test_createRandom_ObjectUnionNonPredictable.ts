import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_createRandom_ObjectUnionNonPredictable = _test_random(
    "ObjectUnionNonPredictable",
    typia.createRandom<ObjectUnionNonPredictable>(),
    typia.createAssert<typia.Primitive<ObjectUnionNonPredictable>>(),
);
