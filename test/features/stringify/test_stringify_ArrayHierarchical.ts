import typia from "../../../src";

import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_stringify } from "../../internal/_test_stringify";

export const test_stringify_ArrayHierarchical = _test_stringify(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    (input) => typia.stringify(input),
);
