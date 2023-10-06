import typia from "../../../src";
import { ClassMethod } from "../../structures/ClassMethod";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_ClassMethod = _test_protobuf_message(
    "ClassMethod",
)(typia.protobuf.message<ClassMethod>());