import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_stringify_ArrayAtomicAlias = _test_stringify(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    (input) => typia.stringify<ArrayAtomicAlias>(input),
);
