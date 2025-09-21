import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_notation_createValidateKebab_TypeTagArrayUnion = (): void =>
  _test_notation_validateGeneral("TypeTagArrayUnion")<TypeTagArrayUnion>(
    TypeTagArrayUnion,
  )<typia.KebabCase<TypeTagArrayUnion>>({
    convert: typia.notations.createValidateKebab<TypeTagArrayUnion>(),
    assert: typia.createAssert<typia.KebabCase<TypeTagArrayUnion>>(),
  });
