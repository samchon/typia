import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_notation_validateKebab_ObjectPropertyNullable = (): void =>
  _test_notation_validateGeneral(
    "ObjectPropertyNullable",
  )<ObjectPropertyNullable>(ObjectPropertyNullable)<
    typia.KebabCase<ObjectPropertyNullable>
  >({
    convert: (input) =>
      typia.notations.validateKebab<ObjectPropertyNullable>(input),
    assert: typia.createAssert<typia.KebabCase<ObjectPropertyNullable>>(),
  });
