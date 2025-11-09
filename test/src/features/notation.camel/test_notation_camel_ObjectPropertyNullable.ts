import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_notation_validateCamel_ObjectPropertyNullable = (): void =>
  _test_notation_validateGeneral(
    "ObjectPropertyNullable",
  )<ObjectPropertyNullable>(ObjectPropertyNullable)<
    typia.CamelCase<ObjectPropertyNullable>
  >({
    convert: (input) =>
      typia.notations.validateCamel<ObjectPropertyNullable>(input),
    assert: typia.createAssert<typia.CamelCase<ObjectPropertyNullable>>(),
  });
