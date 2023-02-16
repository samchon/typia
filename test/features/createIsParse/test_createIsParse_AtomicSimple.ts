import typia from "typia";

import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_AtomicSimple = _test_isParse(
    "AtomicSimple",
    AtomicSimple.generate,
    typia.createIsParse<AtomicSimple>(),
    AtomicSimple.SPOILERS,
);
