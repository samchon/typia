import typia from "../../../src";

import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_AtomicUnion = _test_validateParse(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) => typia.validateParse<AtomicUnion>(input),
    AtomicUnion.SPOILERS,
);
