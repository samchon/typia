import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_notation_createValidatePascal_ObjectUndefined = (): void =>
  _test_notation_validateGeneral("ObjectUndefined")<ObjectUndefined>(
    ObjectUndefined,
  )<typia.PascalCase<ObjectUndefined>>({
    convert: typia.notations.createValidatePascal<ObjectUndefined>(),
    assert: typia.createAssert<typia.PascalCase<ObjectUndefined>>(),
  });
