import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_misc_createIsPrune_ObjectUnionNonPredictable =
    _test_misc_isPrune("ObjectUnionNonPredictable")<ObjectUnionNonPredictable>(
        ObjectUnionNonPredictable,
    )(typia.misc.createIsPrune<ObjectUnionNonPredictable>());
