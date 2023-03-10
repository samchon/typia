import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_message_ConstantAtomicSimple = _test_message(
    "ConstantAtomicSimple",
    typia.message<ConstantAtomicSimple>(),
);
