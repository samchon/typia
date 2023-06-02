import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_createAssertParse_ArrayAtomicAlias = _test_assertParse(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    typia.createAssertParse<ArrayAtomicAlias>(),
    ArrayAtomicAlias.SPOILERS,
);
