import TSON from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_validate } from "./_test_validate";

export const test_validate_atomic_union = _test_validate(
    "union atomic",
    AtomicUnion.generate,
    (input) => TSON.validate(input),
    AtomicUnion.SPOILERS,
);
