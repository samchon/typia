import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_protobuf_message_ObjectHierarchical = _test_protobuf_message(
    "ObjectHierarchical",
)(typia.protobuf.message<ObjectHierarchical>());
