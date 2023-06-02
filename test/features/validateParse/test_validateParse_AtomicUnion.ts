import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_validateParse_AtomicUnion = _test_validateParse(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) => typia.validateParse<AtomicUnion>(input),
    AtomicUnion.SPOILERS,
);
