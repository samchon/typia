import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_createStringify_ArrayHierarchical = _test_stringify(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    typia.createStringify<ArrayHierarchical>(),
);
