import typia from "typia";

import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_AtomicAlias = _test_isClone(
    "AtomicAlias",
    AtomicAlias.generate,
    typia.createIsClone<AtomicAlias>(),
    AtomicAlias.SPOILERS,
);
