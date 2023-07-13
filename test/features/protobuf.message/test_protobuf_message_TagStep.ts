import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { TagStep } from "../../structures/TagStep";

export const test_protobuf_message_TagStep = _test_protobuf_message(
    "TagStep",
    typia.protobuf.message<TagStep>(),
);
