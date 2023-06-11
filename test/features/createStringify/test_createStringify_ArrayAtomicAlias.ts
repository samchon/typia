import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_createStringify_ArrayAtomicAlias = _test_stringify(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    typia.createStringify<ArrayAtomicAlias>(),
);
