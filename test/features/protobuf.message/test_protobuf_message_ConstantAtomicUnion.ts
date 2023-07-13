import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_protobuf_message_ConstantAtomicUnion = _test_protobuf_message(
    "ConstantAtomicUnion",
    typia.protobuf.message<ConstantAtomicUnion>(),
);
