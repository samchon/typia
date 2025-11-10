import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_notation_createValidateKebab_ObjectDate = (): void =>
  _test_notation_validateGeneral("ObjectDate")<ObjectDate>(ObjectDate)<
    typia.KebabCase<ObjectDate>
  >({
    convert: typia.notations.createValidateKebab<ObjectDate>(),
    assert: typia.createAssert<typia.KebabCase<ObjectDate>>(),
  });
