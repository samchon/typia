import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_message_ConstantAtomicUnion = _test_message(
    "ConstantAtomicUnion",
    typia.message<ConstantAtomicUnion>(),
);
