import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_notation_createValidateCamel_ObjectUnionNonPredictable =
  _test_notation_validateGeneral(
    "ObjectUnionNonPredictable",
  )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)<
    typia.CamelCase<ObjectUnionNonPredictable>
  >({
    convert: typia.notations.createValidateCamel<ObjectUnionNonPredictable>(),
    assert: typia.createAssert<typia.CamelCase<ObjectUnionNonPredictable>>(),
  });
