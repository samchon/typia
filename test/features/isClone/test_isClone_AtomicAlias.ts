import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_isClone_AtomicAlias = _test_isClone(
    "AtomicAlias",
    AtomicAlias.generate,
    (input) => typia.isClone(input),
    AtomicAlias.SPOILERS,
);
