import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_notation_createValidatePascal_ObjectDescription =
  _test_notation_validateGeneral("ObjectDescription")<ObjectDescription>(
    ObjectDescription,
  )<typia.PascalCase<ObjectDescription>>({
    convert: typia.notations.createValidatePascal<ObjectDescription>(),
    assert: typia.createAssert<typia.PascalCase<ObjectDescription>>(),
  });
