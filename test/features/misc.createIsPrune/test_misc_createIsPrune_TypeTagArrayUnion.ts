import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_misc_isPrune_TypeTagArrayUnion = _test_misc_isPrune(
    "TypeTagArrayUnion",
)<TypeTagArrayUnion>(TypeTagArrayUnion)(
    typia.misc.createIsPrune<TypeTagArrayUnion>(),
);
