import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_protobuf_createDecode_ObjectUnionNonPredictable = (): void =>
  _test_protobuf_decode("ObjectUnionNonPredictable")<ObjectUnionNonPredictable>(
    ObjectUnionNonPredictable,
  )({
    decode: typia.protobuf.createDecode<ObjectUnionNonPredictable>(),
    encode: typia.protobuf.createEncode<ObjectUnionNonPredictable>(),
  });
