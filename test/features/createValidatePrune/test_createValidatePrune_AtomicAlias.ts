import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_createValidatePrune_AtomicAlias = _test_validatePrune(
    "AtomicAlias",
    AtomicAlias.generate,
    typia.createValidatePrune<AtomicAlias>(),
    AtomicAlias.SPOILERS,
);
