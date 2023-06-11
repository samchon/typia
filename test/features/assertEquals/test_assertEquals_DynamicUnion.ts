import typia from "../../../src";

import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_assertEquals } from "../../internal/_test_assertEquals";

export const test_assertEquals_DynamicUnion = _test_assertEquals(
    "DynamicUnion",
    DynamicUnion.generate,
    (input) => typia.assertEquals(input),
);
