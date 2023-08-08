import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_protobuf_message_ConstantEnumeration = _test_protobuf_message(
    "ConstantEnumeration",
    typia.protobuf.message<ConstantEnumeration>(),
);
