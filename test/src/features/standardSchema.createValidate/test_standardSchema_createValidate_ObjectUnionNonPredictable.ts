import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_standardSchema_createValidate_ObjectUnionNonPredictable = _test_standardSchema_validate(
    "ObjectUnionNonPredictable",
)<ObjectUnionNonPredictable>(
    ObjectUnionNonPredictable
)(typia.createValidate<ObjectUnionNonPredictable>());
