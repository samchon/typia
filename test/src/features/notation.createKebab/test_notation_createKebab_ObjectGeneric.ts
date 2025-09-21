import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_notation_createValidateKebab_ObjectGeneric = (): void =>
  _test_notation_validateGeneral("ObjectGeneric")<ObjectGeneric>(ObjectGeneric)<
    typia.KebabCase<ObjectGeneric>
  >({
    convert: typia.notations.createValidateKebab<ObjectGeneric>(),
    assert: typia.createAssert<typia.KebabCase<ObjectGeneric>>(),
  });
