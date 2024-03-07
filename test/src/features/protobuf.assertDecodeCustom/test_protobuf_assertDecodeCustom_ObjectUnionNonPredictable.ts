import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertDecodeCustom_ObjectUnionNonPredictable =
  _test_protobuf_assertDecode(CustomGuardError)(
    "ObjectUnionNonPredictable",
  )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)({
    decode: (input) =>
      typia.protobuf.assertDecode<ObjectUnionNonPredictable>(
        input,
        (p) => new CustomGuardError(p),
      ),
    encode: typia.protobuf.createEncode<ObjectUnionNonPredictable>(),
  });
