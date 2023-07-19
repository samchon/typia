import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_protobuf_message_ArrayRepeatedRequired =
    _test_protobuf_message("ArrayRepeatedRequired")(
        typia.protobuf.message<ArrayRepeatedRequired>(),
    );
