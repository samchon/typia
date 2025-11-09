import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_notation_createValidatePascal_ObjectHttpConstant = (): void =>
    _test_notation_validateGeneral("ObjectHttpConstant")<ObjectHttpConstant>(
        ObjectHttpConstant
  )<typia.PascalCase<ObjectHttpConstant>>({
    convert: typia.notations.createValidatePascal<ObjectHttpConstant>(),
    assert: typia.createAssert<typia.PascalCase<ObjectHttpConstant>>(),
  });
