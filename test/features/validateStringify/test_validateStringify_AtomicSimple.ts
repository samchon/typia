import TSON from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_AtomicSimple = _test_validateStringify(
    "AtomicSimple",
    AtomicSimple.generate,
    (input) => TSON.validateStringify(input),
    AtomicSimple.SPOILERS,
);
