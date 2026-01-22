import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_notation_validatePascal_ObjectUnionNonPredictable =
  (): void =>
    _test_notation_validateGeneral(
      "ObjectUnionNonPredictable",
    )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)<
      typia.PascalCase<ObjectUnionNonPredictable>
    >({
      convert: (input) =>
        typia.notations.validatePascal<ObjectUnionNonPredictable>(input),
      assert: typia.createAssert<typia.PascalCase<ObjectUnionNonPredictable>>(),
    });
