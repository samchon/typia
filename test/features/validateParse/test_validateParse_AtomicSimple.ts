import TSON from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_AtomicSimple = _test_validateParse(
    "AtomicSimple",
    AtomicSimple.generate,
    (input) => TSON.validateParse<AtomicSimple>(input),
    AtomicSimple.SPOILERS,
);
