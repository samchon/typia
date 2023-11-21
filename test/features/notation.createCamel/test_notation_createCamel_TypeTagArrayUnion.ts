import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_notation_createValidateCamel_TypeTagArrayUnion =
  _test_notation_validateGeneral("TypeTagArrayUnion")<TypeTagArrayUnion>(
    TypeTagArrayUnion,
  )<typia.CamelCase<TypeTagArrayUnion>>({
    convert: typia.notations.createValidateCamel<TypeTagArrayUnion>(),
    assert: typia.createAssert<typia.CamelCase<TypeTagArrayUnion>>(),
  });
