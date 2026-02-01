import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_notation_validatePascal_ObjectHttpConstant = (): void =>
    _test_notation_validateGeneral("ObjectHttpConstant")<ObjectHttpConstant>(
        ObjectHttpConstant
  )<typia.PascalCase<ObjectHttpConstant>>({
    convert: (input) => typia.notations.validatePascal<ObjectHttpConstant>(input),
    assert: typia.createAssert<typia.PascalCase<ObjectHttpConstant>>(),
  });
