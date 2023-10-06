import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_createAssertEquals_TypeTagArrayUnion = _test_assertEquals(
    "TypeTagArrayUnion",
)<TypeTagArrayUnion>(TypeTagArrayUnion)(
    typia.createAssertEquals<TypeTagArrayUnion>(),
);
