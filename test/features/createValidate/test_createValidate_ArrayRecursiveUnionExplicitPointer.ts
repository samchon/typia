import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_validate_ArrayRecursiveUnionExplicitPointer = _test_validate(
    "ArrayRecursiveUnionExplicitPointer",
)<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)(
    typia.createValidate<ArrayRecursiveUnionExplicitPointer>(),
);
