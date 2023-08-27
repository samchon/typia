import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_misc_assertClone_TypeTagArrayUnion = _test_misc_assertClone(
    "TypeTagArrayUnion",
)<TypeTagArrayUnion>(TypeTagArrayUnion)((input) =>
    typia.misc.assertClone<TypeTagArrayUnion>(input),
);
