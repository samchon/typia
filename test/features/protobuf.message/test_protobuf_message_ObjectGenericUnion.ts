import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_protobuf_message_ObjectGenericUnion = _test_protobuf_message(
    "ObjectGenericUnion",
)(typia.protobuf.message<ObjectGenericUnion>());
