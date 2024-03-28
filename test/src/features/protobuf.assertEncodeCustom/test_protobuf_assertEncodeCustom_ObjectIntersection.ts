import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_protobuf_assertEncodeCustom_ObjectIntersection =
  _test_protobuf_assertEncode(CustomGuardError)(
    "ObjectIntersection",
  )<ObjectIntersection>(ObjectIntersection)({
    encode: (input) =>
      typia.protobuf.assertEncode<ObjectIntersection>(
        input,
        (p) => new CustomGuardError(p),
      ),
    decode: typia.protobuf.createDecode<ObjectIntersection>(),
    message: typia.protobuf.message<ObjectIntersection>(),
  });
