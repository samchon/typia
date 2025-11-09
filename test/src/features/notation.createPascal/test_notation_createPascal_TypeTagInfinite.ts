import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_notation_createValidatePascal_TypeTagInfinite = (): void =>
  _test_notation_validateGeneral("TypeTagInfinite")<TypeTagInfinite>(
    TypeTagInfinite,
  )<typia.PascalCase<TypeTagInfinite>>({
    convert: typia.notations.createValidatePascal<TypeTagInfinite>(),
    assert: typia.createAssert<typia.PascalCase<TypeTagInfinite>>(),
  });
