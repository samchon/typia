import typia from "typia";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_ObjectUnionNonPredictable =
  _test_protobuf_message("ObjectUnionNonPredictable")(
    typia.protobuf.message<ObjectUnionNonPredictable>(),
  );
