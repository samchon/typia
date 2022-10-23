import TSON from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_validate } from "./_test_validate";

export const test_validate_atomic_simple = _test_validate(
    "atomic",
    AtomicSimple.generate,
    (input) => TSON.validate(input),
    AtomicSimple.SPOILERS,
);
