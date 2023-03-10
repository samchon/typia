import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_validateClone_AtomicUnion = _test_validateClone(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) => typia.validateClone(input),
    AtomicUnion.SPOILERS,
);
