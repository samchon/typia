import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_createValidateEquals_TypeTagArrayUnion = _test_validateEquals(
  "TypeTagArrayUnion",
)<TypeTagArrayUnion>(TypeTagArrayUnion)(
  typia.createValidateEquals<TypeTagArrayUnion>(),
);
