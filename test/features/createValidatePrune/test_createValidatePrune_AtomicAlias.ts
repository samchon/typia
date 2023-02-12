import typia from "../../../src";
import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_createValidatePrune_AtomicAlias = _test_validatePrune(
    "AtomicAlias",
    AtomicAlias.generate,
    typia.createValidatePrune<AtomicAlias>(),
    AtomicAlias.SPOILERS,
);