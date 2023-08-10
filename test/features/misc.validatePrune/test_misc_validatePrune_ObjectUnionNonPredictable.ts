import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_misc_validatePrune_ObjectUnionNonPredictable =
    _test_misc_validatePrune<ObjectUnionNonPredictable>(
        ObjectUnionNonPredictable,
    )((input) => typia.misc.validatePrune<ObjectUnionNonPredictable>(input));
