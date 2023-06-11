import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_validateStringify_AtomicSimple = _test_validateStringify(
    "AtomicSimple",
    AtomicSimple.generate,
    (input) => typia.validateStringify(input),
    AtomicSimple.SPOILERS,
);
