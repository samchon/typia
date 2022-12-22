import typia from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_message } from "../internal/_test_message";

export const test_message_ConstantAtomicUnion = _test_message(
    "ConstantAtomicUnion",
    typia.message<ConstantAtomicUnion>(),
);