import TSON from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_AtomicUnion = _test_validateParse(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) => TSON.validateParse<AtomicUnion>(input),
    AtomicUnion.SPOILERS,
);
