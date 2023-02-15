import typia from "typia";

import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_UltimateUnion = _test_validateClone(
    "UltimateUnion",
    UltimateUnion.generate,
    typia.createValidateClone<UltimateUnion>(),
    UltimateUnion.SPOILERS,
);
