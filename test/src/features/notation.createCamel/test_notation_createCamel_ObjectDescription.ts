import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_notation_createValidateCamel_ObjectDescription = (): void =>
  _test_notation_validateGeneral("ObjectDescription")<ObjectDescription>(
    ObjectDescription,
  )<typia.CamelCase<ObjectDescription>>({
    convert: typia.notations.createValidateCamel<ObjectDescription>(),
    assert: typia.createAssert<typia.CamelCase<ObjectDescription>>(),
  });
