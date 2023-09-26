import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_misc_createAssertPrune_TypeTagArrayUnion =
    _test_misc_assertPrune("TypeTagArrayUnion")<TypeTagArrayUnion>(
        TypeTagArrayUnion,
    )(typia.misc.createAssertPrune<TypeTagArrayUnion>());
