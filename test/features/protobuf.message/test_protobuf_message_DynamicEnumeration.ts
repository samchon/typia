import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_protobuf_message_DynamicEnumeration = _test_protobuf_message(
    "DynamicEnumeration",
    typia.protobuf.message<DynamicEnumeration>(),
);
