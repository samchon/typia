import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_protobuf_createIsEncode_ObjectUnionNonPredictable =
  (): void =>
    _test_protobuf_isEncode(
      "ObjectUnionNonPredictable",
    )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)({
      encode: typia.protobuf.createIsEncode<ObjectUnionNonPredictable>(),
      decode: typia.protobuf.createDecode<ObjectUnionNonPredictable>(),
      message: typia.protobuf.message<ObjectUnionNonPredictable>(),
    });
