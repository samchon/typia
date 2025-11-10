import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_notation_validateKebab_ObjectHttpConstant = (): void =>
  _test_notation_validateGeneral("ObjectHttpConstant")<ObjectHttpConstant>(
    ObjectHttpConstant,
  )<typia.KebabCase<ObjectHttpConstant>>({
    convert: (input) =>
      typia.notations.validateKebab<ObjectHttpConstant>(input),
    assert: typia.createAssert<typia.KebabCase<ObjectHttpConstant>>(),
  });
