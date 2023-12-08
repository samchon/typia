import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_protobuf_createAssertEncode_ObjectUnionNonPredictable =
  _test_protobuf_assertEncode(
    "ObjectUnionNonPredictable",
  )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)({
    encode: (input) =>
      typia.protobuf.assertEncode<ObjectUnionNonPredictable>(input),
    decode: typia.protobuf.createDecode<ObjectUnionNonPredictable>(),
    message: typia.protobuf.message<ObjectUnionNonPredictable>(),
  });
