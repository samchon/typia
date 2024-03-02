import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_protobuf_isEncode_ObjectDescription = _test_protobuf_isEncode(
  "ObjectDescription",
)<ObjectDescription>(ObjectDescription)({
  encode: (input) => typia.protobuf.isEncode<ObjectDescription>(input),
  decode: typia.protobuf.createDecode<ObjectDescription>(),
  message: typia.protobuf.message<ObjectDescription>(),
});
