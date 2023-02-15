import typia from "typia";

import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_createIsPrune_AtomicAlias = _test_isPrune(
    "AtomicAlias",
    AtomicAlias.generate,
    typia.createIsPrune<AtomicAlias>(),
    AtomicAlias.SPOILERS,
);
