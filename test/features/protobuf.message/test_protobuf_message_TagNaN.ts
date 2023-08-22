import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { TagNaN } from "../../structures/TagNaN";

export const test_protobuf_message_TagNaN = _test_protobuf_message("TagNaN")(
    typia.protobuf.message<TagNaN>(),
);
