import typia from "../../../src";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_message } from "../internal/_test_message";

export const test_message_ArrayAtomicAlias = _test_message(
    "ArrayAtomicAlias",
    typia.message<ArrayAtomicAlias>(),
);