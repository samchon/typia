import typia from "typia";

import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_ToJsonAtomicSimple = _test_validateClone(
    "ToJsonAtomicSimple",
    ToJsonAtomicSimple.generate,
    typia.createValidateClone<ToJsonAtomicSimple>(),
);
