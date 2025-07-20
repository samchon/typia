import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_protobuf_assertDecode_ObjectUnionNonPredictable = (): void =>
  _test_protobuf_assertDecode(TypeGuardError)(
    "ObjectUnionNonPredictable",
  )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)({
    decode: (input) =>
      typia.protobuf.assertDecode<ObjectUnionNonPredictable>(input),
    encode: typia.protobuf.createEncode<ObjectUnionNonPredictable>(),
  });
