import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_notation_validateKebab_ObjectDescription = (): void =>
  _test_notation_validateGeneral("ObjectDescription")<ObjectDescription>(
    ObjectDescription,
  )<typia.KebabCase<ObjectDescription>>({
    convert: (input) => typia.notations.validateKebab<ObjectDescription>(input),
    assert: typia.createAssert<typia.KebabCase<ObjectDescription>>(),
  });
