import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_equals_TypeTagArrayUnion = _test_equals(
  "TypeTagArrayUnion",
)<TypeTagArrayUnion>(TypeTagArrayUnion)((input) =>
  typia.equals<TypeTagArrayUnion>(input),
);
