import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_notation_validateCamel_ObjectPartial = (): void =>
    _test_notation_validateGeneral("ObjectPartial")<ObjectPartial>(
        ObjectPartial
  )<typia.CamelCase<ObjectPartial>>({
    convert: (input) => typia.notations.validateCamel<ObjectPartial>(input),
    assert: typia.createAssert<typia.CamelCase<ObjectPartial>>(),
  });
