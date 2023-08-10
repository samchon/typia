import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_misc_validateClone_ObjectUnionNonPredictable =
    _test_misc_validateClone<ObjectUnionNonPredictable>(
        ObjectUnionNonPredictable,
    )(typia.misc.createValidateClone<ObjectUnionNonPredictable>());
