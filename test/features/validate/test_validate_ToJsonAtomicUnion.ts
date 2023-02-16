import typia from "typia";

import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_ToJsonAtomicUnion = _test_validate(
    "ToJsonAtomicUnion",
    ToJsonAtomicUnion.generate,
    (input) => typia.validate(input),
);
