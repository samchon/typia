import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_notation_validateCamel_TypeTagType = (): void =>
    _test_notation_validateGeneral("TypeTagType")<TypeTagType>(
        TypeTagType
  )<typia.CamelCase<TypeTagType>>({
    convert: (input) => typia.notations.validateCamel<TypeTagType>(input),
    assert: typia.createAssert<typia.CamelCase<TypeTagType>>(),
  });
