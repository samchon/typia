import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_notation_validateKebab_ObjectUnionNonPredictable = (): void =>
  _test_notation_validateGeneral(
    "ObjectUnionNonPredictable",
  )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)<
    typia.KebabCase<ObjectUnionNonPredictable>
  >({
    convert: (input) =>
      typia.notations.validateKebab<ObjectUnionNonPredictable>(input),
    assert: typia.createAssert<typia.KebabCase<ObjectUnionNonPredictable>>(),
  });
