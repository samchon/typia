import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

import { TypeGuardError } from "typia";

export const test_protobuf_assertEncode_ObjectIntersection = (): void => _test_protobuf_assertEncode(TypeGuardError)(
  "ObjectIntersection",
)<ObjectIntersection>(ObjectIntersection)({
  encode: (input) => typia.protobuf.assertEncode<ObjectIntersection>(input),
  decode: typia.protobuf.createDecode<ObjectIntersection>(),
  message: typia.protobuf.message<ObjectIntersection>(),
});
