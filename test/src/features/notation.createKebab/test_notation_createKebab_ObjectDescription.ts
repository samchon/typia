import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_notation_createValidateKebab_ObjectDescription = (): void =>
  _test_notation_validateGeneral("ObjectDescription")<ObjectDescription>(
    ObjectDescription,
  )<typia.KebabCase<ObjectDescription>>({
    convert: typia.notations.createValidateKebab<ObjectDescription>(),
    assert: typia.createAssert<typia.KebabCase<ObjectDescription>>(),
  });
