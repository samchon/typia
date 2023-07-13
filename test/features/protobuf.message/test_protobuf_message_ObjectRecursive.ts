import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_protobuf_message_ObjectRecursive = _test_protobuf_message(
    "ObjectRecursive",
    typia.protobuf.message<ObjectRecursive>(),
);
