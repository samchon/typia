import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_isPrune_AtomicAlias = _test_isPrune(
    "AtomicAlias",
    AtomicAlias.generate,
    (input) => typia.isPrune<AtomicAlias>(input),
    AtomicAlias.SPOILERS,
);
