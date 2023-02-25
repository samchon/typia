import typia from "../../../src";

import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_ToJsonAtomicUnion = _test_validateClone(
    "ToJsonAtomicUnion",
    ToJsonAtomicUnion.generate,
    typia.createValidateClone<ToJsonAtomicUnion>(),
);
