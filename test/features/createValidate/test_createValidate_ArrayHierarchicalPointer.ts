import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_createValidate_ArrayHierarchicalPointer = _test_validate(
    "ArrayHierarchicalPointer",
)<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)(
    typia.createValidate<ArrayHierarchicalPointer>(),
);
