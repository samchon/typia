import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_protobuf_createDecode_ObjectDescription = (): void => _test_protobuf_decode(
  "ObjectDescription",
)<ObjectDescription>(ObjectDescription)({
  decode: typia.protobuf.createDecode<ObjectDescription>(),
  encode: typia.protobuf.createEncode<ObjectDescription>(),
});
