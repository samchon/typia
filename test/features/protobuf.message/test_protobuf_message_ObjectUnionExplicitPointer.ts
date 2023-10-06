import typia from "../../../src";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_ObjectUnionExplicitPointer = _test_protobuf_message(
    "ObjectUnionExplicitPointer",
)(typia.protobuf.message<ObjectUnionExplicitPointer>());