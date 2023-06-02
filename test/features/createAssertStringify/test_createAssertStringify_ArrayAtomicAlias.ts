import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_createAssertStringify_ArrayAtomicAlias =
    _test_assertStringify(
        "ArrayAtomicAlias",
        ArrayAtomicAlias.generate,
        typia.createAssertStringify<ArrayAtomicAlias>(),
        ArrayAtomicAlias.SPOILERS,
    );
