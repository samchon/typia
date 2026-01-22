import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_equals_ObjectUnionNonPredictable = (): void =>
  _test_equals("ObjectUnionNonPredictable")<ObjectUnionNonPredictable>(
    ObjectUnionNonPredictable,
  )((input) => typia.equals<ObjectUnionNonPredictable>(input));
