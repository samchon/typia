import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_notation_validatePascal_ObjectUndefined =
  _test_notation_validateGeneral("ObjectUndefined")<ObjectUndefined>(
    ObjectUndefined,
  )<typia.PascalCase<ObjectUndefined>>({
    convert: (input) => typia.notations.validatePascal<ObjectUndefined>(input),
    assert: typia.createAssert<typia.PascalCase<ObjectUndefined>>(),
  });
