import typia from "../../../src";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_misc_createIsClone_ObjectUnionNonPredictable = _test_misc_isClone(
    "ObjectUnionNonPredictable",
)<ObjectUnionNonPredictable>(
    ObjectUnionNonPredictable
)(typia.misc.createIsClone<ObjectUnionNonPredictable>());
