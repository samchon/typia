import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_protobuf_message_ObjectPartialAndRequired =
  _test_protobuf_message("ObjectPartialAndRequired")(
    typia.protobuf.message<ObjectPartialAndRequired>(),
  );
