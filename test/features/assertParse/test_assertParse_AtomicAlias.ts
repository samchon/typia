import typia from "typia";

import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_AtomicAlias = _test_assertParse(
    "AtomicAlias",
    AtomicAlias.generate,
    (input) => typia.assertParse<AtomicAlias>(input),
    AtomicAlias.SPOILERS,
);
