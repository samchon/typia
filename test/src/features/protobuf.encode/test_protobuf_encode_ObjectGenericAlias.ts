import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_protobuf_encode_ObjectGenericAlias = (): void => _test_protobuf_encode(
  "ObjectGenericAlias",
)<ObjectGenericAlias>(ObjectGenericAlias)({
  encode: (input) => typia.protobuf.encode<ObjectGenericAlias>(input),
  decode: typia.protobuf.createDecode<ObjectGenericAlias>(),
  message: typia.protobuf.message<ObjectGenericAlias>(),
});
