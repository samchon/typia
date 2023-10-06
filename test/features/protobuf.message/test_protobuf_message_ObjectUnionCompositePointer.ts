import typia from "../../../src";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_ObjectUnionCompositePointer = _test_protobuf_message(
    "ObjectUnionCompositePointer",
)(typia.protobuf.message<ObjectUnionCompositePointer>());