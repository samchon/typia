import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_protobuf_createDecode_ObjectGenericArray = (): void => _test_protobuf_decode(
  "ObjectGenericArray",
)<ObjectGenericArray>(ObjectGenericArray)({
  decode: typia.protobuf.createDecode<ObjectGenericArray>(),
  encode: typia.protobuf.createEncode<ObjectGenericArray>(),
});
