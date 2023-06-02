import typia from "../../../src";

import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_random } from "../../internal/_test_random";

export const test_random_UltimateUnion = _test_random(
    "UltimateUnion",
    () => typia.random<UltimateUnion>(),
typia.createAssert<typia.Primitive<UltimateUnion>>(),
);
