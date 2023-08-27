import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_misc_prune_TypeTagArrayUnion = _test_misc_prune(
    "TypeTagArrayUnion",
)<TypeTagArrayUnion>(TypeTagArrayUnion)((input) =>
    typia.misc.prune<TypeTagArrayUnion>(input),
);
