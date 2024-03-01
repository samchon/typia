import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_protobuf_encode_ObjectGenericUnion = _test_protobuf_encode(
  "ObjectGenericUnion",
)<ObjectGenericUnion>(ObjectGenericUnion)({
  encode: (input) => typia.protobuf.encode<ObjectGenericUnion>(input),
  decode: typia.protobuf.createDecode<ObjectGenericUnion>(),
  message: typia.protobuf.message<ObjectGenericUnion>(),
});
