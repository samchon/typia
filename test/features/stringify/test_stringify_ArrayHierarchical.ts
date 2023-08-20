import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_stringify_ArrayHierarchical = _test_stringify(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    (input) => typia.stringify<ArrayHierarchical>(input),
);
