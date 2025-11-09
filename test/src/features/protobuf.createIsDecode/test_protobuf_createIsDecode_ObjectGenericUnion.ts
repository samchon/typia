import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_protobuf_createIsDecode_ObjectGenericUnion = (): void => _test_protobuf_isDecode(
  "ObjectGenericUnion",
)<ObjectGenericUnion>(ObjectGenericUnion)({
  decode: typia.protobuf.createIsDecode<ObjectGenericUnion>(),
  encode: typia.protobuf.createEncode<ObjectGenericUnion>(),
});
