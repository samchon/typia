import typia from "../../../src";

import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_is } from "../internal/_test_is";

export const test_createIs_AtomicAlias = _test_is(
    "AtomicAlias",
    AtomicAlias.generate,
    typia.createIs<AtomicAlias>(),
    AtomicAlias.SPOILERS,
);
