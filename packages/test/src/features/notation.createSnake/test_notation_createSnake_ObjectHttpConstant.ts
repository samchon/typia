import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_notation_createValidateSnake_ObjectHttpConstant =
  _test_notation_validateGeneral("ObjectHttpConstant")<ObjectHttpConstant>(
    ObjectHttpConstant,
  )<typia.SnakeCase<ObjectHttpConstant>>({
    convert: typia.notations.createValidateSnake<ObjectHttpConstant>(),
    assert: typia.createAssert<typia.SnakeCase<ObjectHttpConstant>>(),
  });
