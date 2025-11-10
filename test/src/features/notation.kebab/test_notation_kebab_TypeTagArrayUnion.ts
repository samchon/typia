import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_notation_validateKebab_TypeTagArrayUnion = (): void =>
  _test_notation_validateGeneral("TypeTagArrayUnion")<TypeTagArrayUnion>(
    TypeTagArrayUnion,
  )<typia.KebabCase<TypeTagArrayUnion>>({
    convert: (input) => typia.notations.validateKebab<TypeTagArrayUnion>(input),
    assert: typia.createAssert<typia.KebabCase<TypeTagArrayUnion>>(),
  });
