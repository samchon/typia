import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_assertClone_AtomicAlias = _test_assertClone(
    "AtomicAlias",
    AtomicAlias.generate,
    (input) => typia.assertClone<AtomicAlias>(input),
    AtomicAlias.SPOILERS,
);
