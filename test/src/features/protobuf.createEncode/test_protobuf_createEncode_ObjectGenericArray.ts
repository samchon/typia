import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_protobuf_createEncode_ObjectGenericArray = (): void => _test_protobuf_encode(
  "ObjectGenericArray",
)<ObjectGenericArray>(ObjectGenericArray)({
  encode: typia.protobuf.createEncode<ObjectGenericArray>(),
  decode: typia.protobuf.createDecode<ObjectGenericArray>(),
  message: typia.protobuf.message<ObjectGenericArray>(),
});
