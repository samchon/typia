import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_protobuf_createAssertDecode_ObjectUnionNonPredictable =
  _test_protobuf_assertDecode(TypeGuardError)(
    "ObjectUnionNonPredictable",
  )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)({
    decode: typia.protobuf.createAssertDecode<ObjectUnionNonPredictable>(),
    encode: typia.protobuf.createEncode<ObjectUnionNonPredictable>(),
  });
