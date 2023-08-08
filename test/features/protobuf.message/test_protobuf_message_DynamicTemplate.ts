import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_protobuf_message_DynamicTemplate = _test_protobuf_message(
    "DynamicTemplate",
    typia.protobuf.message<DynamicTemplate>(),
);
