import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_notation_validatePascal_ObjectRequired = (): void =>
  _test_notation_validateGeneral("ObjectRequired")<ObjectRequired>(
    ObjectRequired,
  )<typia.PascalCase<ObjectRequired>>({
    convert: (input) => typia.notations.validatePascal<ObjectRequired>(input),
    assert: typia.createAssert<typia.PascalCase<ObjectRequired>>(),
  });
