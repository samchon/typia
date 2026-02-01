import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_protobuf_createValidateEncode_ObjectUnionNonPredictable = (): void => _test_protobuf_validateEncode(
  "ObjectUnionNonPredictable",
)<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)({
  encode: typia.protobuf.createValidateEncode<ObjectUnionNonPredictable>(),
  decode: typia.protobuf.createDecode<ObjectUnionNonPredictable>(),
  message: typia.protobuf.message<ObjectUnionNonPredictable>(),
});
