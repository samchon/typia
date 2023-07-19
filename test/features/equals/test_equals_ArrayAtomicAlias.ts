import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_equals_ArrayAtomicAlias = _test_equals<ArrayAtomicAlias>(
    ArrayAtomicAlias,
)((input) => typia.equals(input));
