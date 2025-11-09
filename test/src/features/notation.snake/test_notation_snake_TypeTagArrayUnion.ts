import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_notation_validateSnake_TypeTagArrayUnion = (): void =>
    _test_notation_validateGeneral("TypeTagArrayUnion")<TypeTagArrayUnion>(
        TypeTagArrayUnion
  )<typia.SnakeCase<TypeTagArrayUnion>>({
    convert: (input) => typia.notations.validateSnake<TypeTagArrayUnion>(input),
    assert: typia.createAssert<typia.SnakeCase<TypeTagArrayUnion>>(),
  });
