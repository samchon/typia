import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_message_ArrayAtomicSimple = _test_message(
    "ArrayAtomicSimple",
    typia.message<ArrayAtomicSimple>(),
);
