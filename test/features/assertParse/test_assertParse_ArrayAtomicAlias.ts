import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_assertParse_ArrayAtomicAlias = _test_assertParse(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    (input) => typia.assertParse<ArrayAtomicAlias>(input),
    ArrayAtomicAlias.SPOILERS,
);
