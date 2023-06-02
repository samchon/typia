import typia from "../../../src";

import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";
import { _test_is } from "../../internal/_test_is";

export const test_is_ToJsonAtomicUnion = _test_is(
    "ToJsonAtomicUnion",
    ToJsonAtomicUnion.generate,
    (input) => typia.is(input),
);
