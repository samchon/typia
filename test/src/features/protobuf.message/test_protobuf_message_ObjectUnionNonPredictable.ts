import typia from "typia";

import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_protobuf_message_ObjectUnionNonPredictable =
  _test_protobuf_message("ObjectUnionNonPredictable")(
    typia.protobuf.message<ObjectUnionNonPredictable>(),
  );
