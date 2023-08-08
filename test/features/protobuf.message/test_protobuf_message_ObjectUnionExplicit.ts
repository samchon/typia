import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_protobuf_message_ObjectUnionExplicit = _test_protobuf_message(
    "ObjectUnionExplicit",
    typia.protobuf.message<ObjectUnionExplicit>(),
);
