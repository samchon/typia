import typia from "../../../src";

import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_DynamicSimple = _test_clone(
    "DynamicSimple",
    DynamicSimple.generate,
    typia.createClone<DynamicSimple>(),
);
