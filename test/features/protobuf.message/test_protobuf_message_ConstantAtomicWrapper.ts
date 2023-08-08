import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_protobuf_message_ConstantAtomicWrapper =
    _test_protobuf_message(
        "ConstantAtomicWrapper",
        typia.protobuf.message<ConstantAtomicWrapper>(),
    );
