import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_misc_validateClone_AtomicUnion = _test_misc_validateClone(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) => typia.misc.validateClone(input),
    AtomicUnion.SPOILERS,
);
