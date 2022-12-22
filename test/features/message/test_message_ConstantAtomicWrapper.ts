import typia from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_message } from "../internal/_test_message";

export const test_message_ConstantAtomicWrapper = _test_message(
    "ConstantAtomicWrapper",
    typia.message<ConstantAtomicWrapper>(),
);