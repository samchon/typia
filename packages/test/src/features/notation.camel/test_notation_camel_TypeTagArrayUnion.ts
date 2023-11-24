import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_notation_validateCamel_TypeTagArrayUnion =
  _test_notation_validateGeneral("TypeTagArrayUnion")<TypeTagArrayUnion>(
    TypeTagArrayUnion,
  )<typia.CamelCase<TypeTagArrayUnion>>({
    convert: (input) => typia.notations.validateCamel<TypeTagArrayUnion>(input),
    assert: typia.createAssert<typia.CamelCase<TypeTagArrayUnion>>(),
  });
