import typia from "typia";

import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_AtomicAlias = _test_assertClone(
    "AtomicAlias",
    AtomicAlias.generate,
    (input) => typia.assertClone(input),
    AtomicAlias.SPOILERS,
);
