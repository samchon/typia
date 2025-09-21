import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_notation_createValidateKebab_ObjectRequired = (): void =>
  _test_notation_validateGeneral("ObjectRequired")<ObjectRequired>(
    ObjectRequired,
  )<typia.KebabCase<ObjectRequired>>({
    convert: typia.notations.createValidateKebab<ObjectRequired>(),
    assert: typia.createAssert<typia.KebabCase<ObjectRequired>>(),
  });
