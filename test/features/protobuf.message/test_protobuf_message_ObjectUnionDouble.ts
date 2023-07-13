import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_protobuf_message_ObjectUnionDouble = _test_protobuf_message(
    "ObjectUnionDouble",
    typia.protobuf.message<ObjectUnionDouble>(),
);
