import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_createAssert_TypeTagArrayUnion = _test_assert(
    "TypeTagArrayUnion",
)<TypeTagArrayUnion>(TypeTagArrayUnion)(
    typia.createAssert<TypeTagArrayUnion>(),
);
