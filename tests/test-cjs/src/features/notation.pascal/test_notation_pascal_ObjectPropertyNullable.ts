import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_notation_validatePascal_ObjectPropertyNullable = (): void =>
  _test_notation_validateGeneral(
    "ObjectPropertyNullable",
  )<ObjectPropertyNullable>(ObjectPropertyNullable)<
    typia.PascalCase<ObjectPropertyNullable>
  >({
    convert: (input) =>
      typia.notations.validatePascal<ObjectPropertyNullable>(input),
    assert: typia.createAssert<typia.PascalCase<ObjectPropertyNullable>>(),
  });
