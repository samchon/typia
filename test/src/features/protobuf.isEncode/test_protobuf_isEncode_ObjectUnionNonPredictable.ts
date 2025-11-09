import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_protobuf_isEncode_ObjectUnionNonPredictable = (): void => _test_protobuf_isEncode(
  "ObjectUnionNonPredictable",
)<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)({
  encode: (input) => typia.protobuf.isEncode<ObjectUnionNonPredictable>(input),
  decode: typia.protobuf.createDecode<ObjectUnionNonPredictable>(),
  message: typia.protobuf.message<ObjectUnionNonPredictable>(),
});
