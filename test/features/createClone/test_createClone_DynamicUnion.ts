import typia from "../../../src";

import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_DynamicUnion = _test_clone(
    "DynamicUnion",
    DynamicUnion.generate,
    typia.createClone<DynamicUnion>(),
);
