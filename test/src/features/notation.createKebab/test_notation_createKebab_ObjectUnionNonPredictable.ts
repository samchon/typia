import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_notation_createValidateKebab_ObjectUnionNonPredictable =
  (): void =>
    _test_notation_validateGeneral(
      "ObjectUnionNonPredictable",
    )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)<
      typia.KebabCase<ObjectUnionNonPredictable>
    >({
      convert: typia.notations.createValidateKebab<ObjectUnionNonPredictable>(),
      assert: typia.createAssert<typia.KebabCase<ObjectUnionNonPredictable>>(),
    });
