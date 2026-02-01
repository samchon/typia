import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_notation_validatePascal_TypeTagNaN = (): void =>
    _test_notation_validateGeneral("TypeTagNaN")<TypeTagNaN>(
        TypeTagNaN
  )<typia.PascalCase<TypeTagNaN>>({
    convert: (input) => typia.notations.validatePascal<TypeTagNaN>(input),
    assert: typia.createAssert<typia.PascalCase<TypeTagNaN>>(),
  });
