import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_notation_validateSnake_ObjectUnionNonPredictable =
  _test_notation_validateGeneral(
    "ObjectUnionNonPredictable",
  )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)<
    typia.SnakeCase<ObjectUnionNonPredictable>
  >({
    convert: (input) =>
      typia.notations.validateSnake<ObjectUnionNonPredictable>(input),
    assert: typia.createAssert<typia.SnakeCase<ObjectUnionNonPredictable>>(),
  });
