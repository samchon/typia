import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_protobuf_createAssertDecodeCustom_ObjectIntersection =
  (): void =>
    _test_protobuf_assertDecode(CustomGuardError)(
      "ObjectIntersection",
    )<ObjectIntersection>(ObjectIntersection)({
      decode: typia.protobuf.createAssertDecode<ObjectIntersection>(
        (p) => new CustomGuardError(p),
      ),
      encode: typia.protobuf.createEncode<ObjectIntersection>(),
    });
