import typia from "../../../src";

import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_UltimateUnion = _test_clone(
    "UltimateUnion",
    UltimateUnion.generate,
    typia.createClone<UltimateUnion>(),
);
