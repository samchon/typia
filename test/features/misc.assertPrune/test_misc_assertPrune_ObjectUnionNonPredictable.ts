import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_misc_assertPrune_ObjectUnionNonPredictable =
    _test_misc_assertPrune(
        "ObjectUnionNonPredictable",
    )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)((input) =>
        typia.misc.assertPrune<ObjectUnionNonPredictable>(input),
    );
