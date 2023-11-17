import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_createAssertGuard_TypeTagArrayUnion = _test_assertGuard(
  "TypeTagArrayUnion",
)<TypeTagArrayUnion>(TypeTagArrayUnion)(
  typia.createAssertGuard<TypeTagArrayUnion>(),
);
