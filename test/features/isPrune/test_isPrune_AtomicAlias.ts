import typia from "../../../src";

import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_isPrune_AtomicAlias = _test_isPrune(
    "AtomicAlias",
    AtomicAlias.generate,
    (input) => typia.isPrune(input),
    AtomicAlias.SPOILERS,
);
