import typia from "../../../src";

import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";
import { _test_validateEquals } from "../../internal/_test_validateEquals";

export const test_validateEquals_ToJsonAtomicUnion = _test_validateEquals(
    "ToJsonAtomicUnion",
    ToJsonAtomicUnion.generate,
    (input) => typia.validateEquals(input),
);
