import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_notation_validateCamel_ObjectDescription = (): void =>
    _test_notation_validateGeneral("ObjectDescription")<ObjectDescription>(
        ObjectDescription
  )<typia.CamelCase<ObjectDescription>>({
    convert: (input) => typia.notations.validateCamel<ObjectDescription>(input),
    assert: typia.createAssert<typia.CamelCase<ObjectDescription>>(),
  });
