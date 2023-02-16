import typia from "typia";

import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ToJsonAtomicSimple = _test_is(
    "ToJsonAtomicSimple",
    ToJsonAtomicSimple.generate,
    typia.createIs<ToJsonAtomicSimple>(),
);
