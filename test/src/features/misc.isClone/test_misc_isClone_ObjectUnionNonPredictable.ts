import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_misc_isClone_ObjectUnionNonPredictable = (): void =>
  _test_misc_isClone("ObjectUnionNonPredictable")<ObjectUnionNonPredictable>(
    ObjectUnionNonPredictable,
  )((input) => typia.misc.isClone<ObjectUnionNonPredictable>(input));
