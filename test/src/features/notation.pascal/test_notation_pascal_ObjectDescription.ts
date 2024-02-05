import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_notation_validatePascal_ObjectDescription =
  _test_notation_validateGeneral("ObjectDescription")<ObjectDescription>(
    ObjectDescription,
  )<typia.PascalCase<ObjectDescription>>({
    convert: (input) =>
      typia.notations.validatePascal<ObjectDescription>(input),
    assert: typia.createAssert<typia.PascalCase<ObjectDescription>>(),
  });
