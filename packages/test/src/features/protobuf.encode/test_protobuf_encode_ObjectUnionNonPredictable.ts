import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_protobuf_createEncode_ObjectUnionNonPredictable =
  _test_protobuf_encode("ObjectUnionNonPredictable")<ObjectUnionNonPredictable>(
    ObjectUnionNonPredictable,
  )({
    encode: (input) => typia.protobuf.encode<ObjectUnionNonPredictable>(input),
    decode: typia.protobuf.createDecode<ObjectUnionNonPredictable>(),
    message: typia.protobuf.message<ObjectUnionNonPredictable>(),
  });
