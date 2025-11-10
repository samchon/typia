import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_notation_createValidateKebab_ObjectOptional = (): void =>
  _test_notation_validateGeneral("ObjectOptional")<ObjectOptional>(
    ObjectOptional,
  )<typia.KebabCase<ObjectOptional>>({
    convert: typia.notations.createValidateKebab<ObjectOptional>(),
    assert: typia.createAssert<typia.KebabCase<ObjectOptional>>(),
  });
