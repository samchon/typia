import typia from "../../../src";

import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_DynamicUnion = _test_equals(
    "DynamicUnion",
    DynamicUnion.generate,
    (input) => typia.equals(input),
);
