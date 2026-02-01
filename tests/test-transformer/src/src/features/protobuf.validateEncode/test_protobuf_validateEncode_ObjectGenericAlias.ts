import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_protobuf_validateEncode_ObjectGenericAlias = (): void => _test_protobuf_validateEncode(
  "ObjectGenericAlias",
)<ObjectGenericAlias>(ObjectGenericAlias)({
  encode: (input) => typia.protobuf.validateEncode<ObjectGenericAlias>(input),
  decode: typia.protobuf.createDecode<ObjectGenericAlias>(),
  message: typia.protobuf.message<ObjectGenericAlias>(),
});
