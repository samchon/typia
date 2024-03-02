import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_protobuf_decode_ObjectDescription = _test_protobuf_decode(
  "ObjectDescription",
)<ObjectDescription>(ObjectDescription)({
  decode: (input) => typia.protobuf.decode<ObjectDescription>(input),
  encode: typia.protobuf.createEncode<ObjectDescription>(),
});
