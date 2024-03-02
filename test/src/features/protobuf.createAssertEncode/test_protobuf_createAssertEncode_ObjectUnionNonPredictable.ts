import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_protobuf_createAssertEncode_ObjectUnionNonPredictable =
  _test_protobuf_assertEncode(TypeGuardError)(
    "ObjectUnionNonPredictable",
  )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)({
    encode: typia.protobuf.createAssertEncode<ObjectUnionNonPredictable>(),
    decode: typia.protobuf.createDecode<ObjectUnionNonPredictable>(),
    message: typia.protobuf.message<ObjectUnionNonPredictable>(),
  });
