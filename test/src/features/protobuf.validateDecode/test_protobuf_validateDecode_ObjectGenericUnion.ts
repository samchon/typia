import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_protobuf_validateDecode_ObjectGenericUnion = (): void => _test_protobuf_validateDecode(
  "ObjectGenericUnion",
)<ObjectGenericUnion>(ObjectGenericUnion)({
  decode: (input) => typia.protobuf.validateDecode<ObjectGenericUnion>(input),
  encode: typia.protobuf.createEncode<ObjectGenericUnion>(),
});
