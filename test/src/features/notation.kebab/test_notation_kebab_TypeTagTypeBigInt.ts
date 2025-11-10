import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_notation_validateKebab_TypeTagTypeBigInt = (): void =>
  _test_notation_validateGeneral("TypeTagTypeBigInt")<TypeTagTypeBigInt>(
    TypeTagTypeBigInt,
  )<typia.KebabCase<TypeTagTypeBigInt>>({
    convert: (input) => typia.notations.validateKebab<TypeTagTypeBigInt>(input),
    assert: typia.createAssert<typia.KebabCase<TypeTagTypeBigInt>>(),
  });
