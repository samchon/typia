import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_protobuf_message_ObjectInternal = _test_protobuf_message(
    "ObjectInternal",
    typia.protobuf.message<ObjectInternal>(),
);
