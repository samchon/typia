import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_protobuf_createDecode_ObjectUnionNonPredictable =
  _test_protobuf_decode("ObjectUnionNonPredictable")<ObjectUnionNonPredictable>(
    ObjectUnionNonPredictable,
  )({
    decode: (input) => typia.protobuf.decode<ObjectUnionNonPredictable>(input),
    encode: typia.protobuf.createEncode<ObjectUnionNonPredictable>(),
  });
