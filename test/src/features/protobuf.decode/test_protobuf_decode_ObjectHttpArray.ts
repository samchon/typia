import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_protobuf_decode_ObjectHttpArray = _test_protobuf_decode(
  "ObjectHttpArray",
)<ObjectHttpArray>(ObjectHttpArray)({
  decode: (input) => typia.protobuf.decode<ObjectHttpArray>(input),
  encode: typia.protobuf.createEncode<ObjectHttpArray>(),
});
