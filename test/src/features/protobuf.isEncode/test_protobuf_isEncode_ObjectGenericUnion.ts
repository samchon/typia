import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_protobuf_isEncode_ObjectGenericUnion = (): void => _test_protobuf_isEncode(
  "ObjectGenericUnion",
)<ObjectGenericUnion>(ObjectGenericUnion)({
  encode: (input) => typia.protobuf.isEncode<ObjectGenericUnion>(input),
  decode: typia.protobuf.createDecode<ObjectGenericUnion>(),
  message: typia.protobuf.message<ObjectGenericUnion>(),
});
