import typia from "../../../src";

import { _test_is } from "../../internal/_test_is";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_createIs_AtomicUnion = _test_is(
    "AtomicUnion",
)<AtomicUnion>(
    AtomicUnion
)(typia.createIs<AtomicUnion>());
