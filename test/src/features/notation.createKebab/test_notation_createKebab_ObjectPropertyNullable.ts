import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_notation_createValidateKebab_ObjectPropertyNullable =
  (): void =>
    _test_notation_validateGeneral(
      "ObjectPropertyNullable",
    )<ObjectPropertyNullable>(ObjectPropertyNullable)<
      typia.KebabCase<ObjectPropertyNullable>
    >({
      convert: typia.notations.createValidateKebab<ObjectPropertyNullable>(),
      assert: typia.createAssert<typia.KebabCase<ObjectPropertyNullable>>(),
    });
