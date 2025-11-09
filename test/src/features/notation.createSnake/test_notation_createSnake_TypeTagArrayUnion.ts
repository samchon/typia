import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_notation_createValidateSnake_TypeTagArrayUnion = (): void =>
  _test_notation_validateGeneral("TypeTagArrayUnion")<TypeTagArrayUnion>(
    TypeTagArrayUnion,
  )<typia.SnakeCase<TypeTagArrayUnion>>({
    convert: typia.notations.createValidateSnake<TypeTagArrayUnion>(),
    assert: typia.createAssert<typia.SnakeCase<TypeTagArrayUnion>>(),
  });
