import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_notation_validatePascal_TypeTagArrayUnion = (): void =>
    _test_notation_validateGeneral("TypeTagArrayUnion")<TypeTagArrayUnion>(
        TypeTagArrayUnion
  )<typia.PascalCase<TypeTagArrayUnion>>({
    convert: (input) => typia.notations.validatePascal<TypeTagArrayUnion>(input),
    assert: typia.createAssert<typia.PascalCase<TypeTagArrayUnion>>(),
  });
