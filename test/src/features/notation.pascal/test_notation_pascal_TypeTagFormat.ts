import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_notation_validatePascal_TypeTagFormat = (): void =>
    _test_notation_validateGeneral("TypeTagFormat")<TypeTagFormat>(
        TypeTagFormat
  )<typia.PascalCase<TypeTagFormat>>({
    convert: (input) => typia.notations.validatePascal<TypeTagFormat>(input),
    assert: typia.createAssert<typia.PascalCase<TypeTagFormat>>(),
  });
