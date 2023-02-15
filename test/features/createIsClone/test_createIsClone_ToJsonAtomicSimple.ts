import typia from "typia";

import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_ToJsonAtomicSimple = _test_isClone(
    "ToJsonAtomicSimple",
    ToJsonAtomicSimple.generate,
    typia.createIsClone<ToJsonAtomicSimple>(),
);
