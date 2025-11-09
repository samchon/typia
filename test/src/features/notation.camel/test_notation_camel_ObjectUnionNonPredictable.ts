import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_notation_validateCamel_ObjectUnionNonPredictable = (): void =>
  _test_notation_validateGeneral(
    "ObjectUnionNonPredictable",
  )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)<
    typia.CamelCase<ObjectUnionNonPredictable>
  >({
    convert: (input) =>
      typia.notations.validateCamel<ObjectUnionNonPredictable>(input),
    assert: typia.createAssert<typia.CamelCase<ObjectUnionNonPredictable>>(),
  });
