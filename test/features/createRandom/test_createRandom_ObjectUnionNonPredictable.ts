import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_random_ObjectUnionNonPredictable = _test_random(
    "ObjectUnionNonPredictable",
)<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)({
    random: typia.createRandom<ObjectUnionNonPredictable>(),
    assert: typia.createAssert<ObjectUnionNonPredictable>(),
});
