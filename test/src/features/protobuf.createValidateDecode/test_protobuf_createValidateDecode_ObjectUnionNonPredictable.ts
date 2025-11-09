import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_protobuf_createValidateDecode_ObjectUnionNonPredictable =
  (): void =>
    _test_protobuf_validateDecode(
      "ObjectUnionNonPredictable",
    )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)({
      decode: typia.protobuf.createValidateDecode<ObjectUnionNonPredictable>(),
      encode: typia.protobuf.createEncode<ObjectUnionNonPredictable>(),
    });
