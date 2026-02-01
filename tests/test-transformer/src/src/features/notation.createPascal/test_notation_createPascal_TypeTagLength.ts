import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_notation_createValidatePascal_TypeTagLength = (): void =>
    _test_notation_validateGeneral("TypeTagLength")<TypeTagLength>(
        TypeTagLength
  )<typia.PascalCase<TypeTagLength>>({
    convert: typia.notations.createValidatePascal<TypeTagLength>(),
    assert: typia.createAssert<typia.PascalCase<TypeTagLength>>(),
  });
