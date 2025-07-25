import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_protobuf_createAssertDecode_ObjectIntersection = (): void =>
  _test_protobuf_assertDecode(TypeGuardError)(
    "ObjectIntersection",
  )<ObjectIntersection>(ObjectIntersection)({
    decode: typia.protobuf.createAssertDecode<ObjectIntersection>(),
    encode: typia.protobuf.createEncode<ObjectIntersection>(),
  });
