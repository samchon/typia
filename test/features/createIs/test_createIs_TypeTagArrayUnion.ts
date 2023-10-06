import typia from "../../../src";

import { _test_is } from "../../internal/_test_is";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_createIs_TypeTagArrayUnion = _test_is(
    "TypeTagArrayUnion",
)<TypeTagArrayUnion>(
    TypeTagArrayUnion
)(typia.createIs<TypeTagArrayUnion>());
