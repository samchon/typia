import TSON from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_AtomicUnion = _test_validate(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) => TSON.validate(input),
    AtomicUnion.SPOILERS,
);
