import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_notation_createValidateKebab_ObjectUndefined = (): void =>
  _test_notation_validateGeneral("ObjectUndefined")<ObjectUndefined>(
    ObjectUndefined,
  )<typia.KebabCase<ObjectUndefined>>({
    convert: typia.notations.createValidateKebab<ObjectUndefined>(),
    assert: typia.createAssert<typia.KebabCase<ObjectUndefined>>(),
  });
