import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_message_ArrayAtomicAlias = _test_message(
    "ArrayAtomicAlias",
    typia.message<ArrayAtomicAlias>(),
);
