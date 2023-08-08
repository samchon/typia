import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_protobuf_message_ObjectAlias = _test_protobuf_message(
    "ObjectAlias",
    typia.protobuf.message<ObjectAlias>(),
);
