import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_is_ObjectUnionNonPredictable = (): void =>
  _test_is("ObjectUnionNonPredictable")<ObjectUnionNonPredictable>(
    ObjectUnionNonPredictable,
  )((input) => typia.is<ObjectUnionNonPredictable>(input));
