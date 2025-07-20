import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_protobuf_createAssertDecodeCustom_ObjectUnionNonPredictable =
  (): void =>
    _test_protobuf_assertDecode(CustomGuardError)(
      "ObjectUnionNonPredictable",
    )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)({
      decode: typia.protobuf.createAssertDecode<ObjectUnionNonPredictable>(
        (p) => new CustomGuardError(p),
      ),
      encode: typia.protobuf.createEncode<ObjectUnionNonPredictable>(),
    });
