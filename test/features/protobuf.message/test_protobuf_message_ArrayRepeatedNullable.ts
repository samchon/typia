import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_protobuf_message_ArrayRepeatedNullable =
    _test_protobuf_message("ArrayRepeatedNullable")(
        typia.protobuf.message<ArrayRepeatedNullable>(),
    );
