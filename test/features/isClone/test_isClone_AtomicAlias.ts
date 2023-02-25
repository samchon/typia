import typia from "../../../src";

import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_AtomicAlias = _test_isClone(
    "AtomicAlias",
    AtomicAlias.generate,
    (input) => typia.isClone(input),
    AtomicAlias.SPOILERS,
);
