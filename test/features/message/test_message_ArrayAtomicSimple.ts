import typia from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_message } from "../internal/_test_message";

export const test_message_ArrayAtomicSimple = _test_message(
    "ArrayAtomicSimple",
    typia.message<ArrayAtomicSimple>(),
);