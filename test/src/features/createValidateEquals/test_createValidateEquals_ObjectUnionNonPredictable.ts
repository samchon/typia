import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_createValidateEquals_ObjectUnionNonPredictable =
  _test_validateEquals("ObjectUnionNonPredictable")<ObjectUnionNonPredictable>(
    ObjectUnionNonPredictable,
  )(typia.createValidateEquals<ObjectUnionNonPredictable>());
