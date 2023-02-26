import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_validatePrune_AtomicAlias = _test_validatePrune(
    "AtomicAlias",
    AtomicAlias.generate,
    (input) => typia.validatePrune(input),
    AtomicAlias.SPOILERS,
);
