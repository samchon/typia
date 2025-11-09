import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertDecode_ObjectUnionNonPredictable = (): void => _test_protobuf_assertDecode(TypeGuardError)(
  "ObjectUnionNonPredictable",
)<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)({
  decode: typia.protobuf.createAssertDecode<ObjectUnionNonPredictable>(),
  encode: typia.protobuf.createEncode<ObjectUnionNonPredictable>(),
});
