import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_notation_createValidateCamel_ObjectUndefined = (): void =>
  _test_notation_validateGeneral("ObjectUndefined")<ObjectUndefined>(
    ObjectUndefined,
  )<typia.CamelCase<ObjectUndefined>>({
    convert: typia.notations.createValidateCamel<ObjectUndefined>(),
    assert: typia.createAssert<typia.CamelCase<ObjectUndefined>>(),
  });
