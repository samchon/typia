import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_createAssertPrune_AtomicAlias = _test_assertPrune(
    "AtomicAlias",
    AtomicAlias.generate,
    typia.createAssertPrune<AtomicAlias>(),
    AtomicAlias.SPOILERS,
);
