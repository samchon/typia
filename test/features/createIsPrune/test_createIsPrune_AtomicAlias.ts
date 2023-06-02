import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_createIsPrune_AtomicAlias = _test_isPrune(
    "AtomicAlias",
    AtomicAlias.generate,
    typia.createIsPrune<AtomicAlias>(),
    AtomicAlias.SPOILERS,
);
