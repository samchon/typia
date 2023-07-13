import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_protobuf_message_ObjectDynamic = _test_protobuf_message(
    "ObjectDynamic",
    typia.protobuf.message<ObjectDynamic>(),
);
