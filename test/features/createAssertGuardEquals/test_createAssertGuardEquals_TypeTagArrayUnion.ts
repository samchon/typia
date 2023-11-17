import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_createAssertGuardEquals_TypeTagArrayUnion =
  _test_assertGuardEquals("TypeTagArrayUnion")<TypeTagArrayUnion>(
    TypeTagArrayUnion,
  )(typia.createAssertGuardEquals<TypeTagArrayUnion>());
