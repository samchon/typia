import typia from "../../../src";

import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_validateParse } from "../../internal/_test_validateParse";

export const test_createValidateParse_AtomicUnion = _test_validateParse(
    "AtomicUnion",
    AtomicUnion.generate,
    typia.createValidateParse<AtomicUnion>(),
    AtomicUnion.SPOILERS,
);
