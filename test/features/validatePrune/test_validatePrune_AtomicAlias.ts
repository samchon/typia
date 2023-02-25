import typia from "../../../src";

import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_validatePrune_AtomicAlias = _test_validatePrune(
    "AtomicAlias",
    AtomicAlias.generate,
    (input) => typia.validatePrune(input),
    AtomicAlias.SPOILERS,
);
