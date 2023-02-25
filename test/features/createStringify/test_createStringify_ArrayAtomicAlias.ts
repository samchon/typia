import typia from "../../../src";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_ArrayAtomicAlias = _test_stringify(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    typia.createStringify<ArrayAtomicAlias>(),
);
