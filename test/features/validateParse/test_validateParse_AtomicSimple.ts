import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_validateParse_AtomicSimple = _test_validateParse(
    "AtomicSimple",
    AtomicSimple.generate,
    (input) => typia.validateParse<AtomicSimple>(input),
    AtomicSimple.SPOILERS,
);
