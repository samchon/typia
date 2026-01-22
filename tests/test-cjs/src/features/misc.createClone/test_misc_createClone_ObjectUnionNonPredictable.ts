import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_misc_createClone_ObjectUnionNonPredictable = (): void =>
  _test_misc_clone("ObjectUnionNonPredictable")<ObjectUnionNonPredictable>(
    ObjectUnionNonPredictable,
  )(typia.misc.createClone<ObjectUnionNonPredictable>());
