import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_protobuf_assertEncodeCustom_ObjectUnionNonPredictable =
  _test_protobuf_assertEncode(CustomGuardError)(
    "ObjectUnionNonPredictable",
  )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)({
    encode: (input) =>
      typia.protobuf.assertEncode<ObjectUnionNonPredictable>(
        input,
        (p) => new CustomGuardError(p),
      ),
    decode: typia.protobuf.createDecode<ObjectUnionNonPredictable>(),
    message: typia.protobuf.message<ObjectUnionNonPredictable>(),
  });
