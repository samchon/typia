import typia from "../../../src";

import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_assertPrune } from "../../internal/_test_assertPrune";

export const test_createAssertPrune_AtomicAlias = _test_assertPrune(
    "AtomicAlias",
    AtomicAlias.generate,
    typia.createAssertPrune<AtomicAlias>(),
    AtomicAlias.SPOILERS,
);
