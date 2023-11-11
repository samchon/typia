import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_reflect_metadata_ArrayHierarchicalPointer =
    _test_reflect_metadata("ArrayHierarchicalPointer")(
        typia.reflect.metadata<[ArrayHierarchicalPointer]>(),
    );
