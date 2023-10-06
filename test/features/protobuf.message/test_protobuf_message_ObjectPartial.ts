import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_protobuf_message_ObjectPartial = _test_protobuf_message(
    "ObjectPartial",
)(typia.protobuf.message<ObjectPartial>());
