import typia from "../../../src";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_ArrayAtomicAlias = _test_equals(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    (input) => typia.equals(input),
);
