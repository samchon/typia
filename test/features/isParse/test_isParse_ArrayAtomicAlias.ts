import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_isParse_ArrayAtomicAlias = _test_isParse(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    (input) => typia.isParse<ArrayAtomicAlias>(input),
    ArrayAtomicAlias.SPOILERS,
);
