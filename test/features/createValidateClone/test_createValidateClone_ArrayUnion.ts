import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_createValidateClone_ArrayUnion = _test_validateClone(
    "ArrayUnion",
    ArrayUnion.generate,
    typia.createValidateClone<ArrayUnion>(),
    ArrayUnion.SPOILERS,
);
