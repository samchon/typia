import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_assertEquals_TypeTagArrayUnion = _test_assertEquals(
    "TypeTagArrayUnion",
)<TypeTagArrayUnion>(TypeTagArrayUnion)((input) =>
    typia.assertEquals<TypeTagArrayUnion>(input),
);
