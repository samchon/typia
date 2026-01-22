import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_notation_createValidateSnake_ObjectUnionNonPredictable =
  (): void =>
    _test_notation_validateGeneral(
      "ObjectUnionNonPredictable",
    )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)<
      typia.SnakeCase<ObjectUnionNonPredictable>
    >({
      convert: typia.notations.createValidateSnake<ObjectUnionNonPredictable>(),
      assert: typia.createAssert<typia.SnakeCase<ObjectUnionNonPredictable>>(),
    });
