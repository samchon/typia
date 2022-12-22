import typia from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_message } from "../internal/_test_message";

export const test_message_ConstantAtomicSimple = _test_message(
    "ConstantAtomicSimple",
    typia.message<ConstantAtomicSimple>(),
);