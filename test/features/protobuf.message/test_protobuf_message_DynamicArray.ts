import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_protobuf_message_DynamicArray = _test_protobuf_message(
    "DynamicArray",
    typia.protobuf.message<DynamicArray>(),
);
