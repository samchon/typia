import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_protobuf_message_ObjectUnionImplicit = _test_protobuf_message(
    "ObjectUnionImplicit",
    typia.protobuf.message<ObjectUnionImplicit>(),
);
