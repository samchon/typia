import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_message_ConstantAtomicWrapper = _test_message(
    "ConstantAtomicWrapper",
    typia.message<ConstantAtomicWrapper>(),
);
