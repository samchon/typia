import typia from "../../../src";
import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_AtomicAlias = _test_validateClone(
    "AtomicAlias",
    AtomicAlias.generate,
    (input) => typia.validateClone(input),
    AtomicAlias.SPOILERS,
);