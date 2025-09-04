import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_protobuf_createAssertEncodeCustom_ObjectUnionNonPredictable =
  (): void =>
    _test_protobuf_assertEncode(CustomGuardError)(
      "ObjectUnionNonPredictable",
    )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)({
      encode: typia.protobuf.createAssertEncode<ObjectUnionNonPredictable>(
        (p) => new CustomGuardError(p),
      ),
      decode: typia.protobuf.createDecode<ObjectUnionNonPredictable>(),
      message: typia.protobuf.message<ObjectUnionNonPredictable>(),
    });
