import typia from "../../../src";

import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_assert } from "../../internal/_test_assert";

export const test_assert_AtomicAlias = _test_assert(
    "AtomicAlias",
    AtomicAlias.generate,
    (input) => typia.assert(input),
    AtomicAlias.SPOILERS,
);
