import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_notation_createValidateKebab_ObjectHttpConstant = (): void =>
  _test_notation_validateGeneral("ObjectHttpConstant")<ObjectHttpConstant>(
    ObjectHttpConstant,
  )<typia.KebabCase<ObjectHttpConstant>>({
    convert: typia.notations.createValidateKebab<ObjectHttpConstant>(),
    assert: typia.createAssert<typia.KebabCase<ObjectHttpConstant>>(),
  });
