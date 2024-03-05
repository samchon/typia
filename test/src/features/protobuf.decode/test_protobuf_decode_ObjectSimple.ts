import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_protobuf_decode_ObjectSimple = _test_protobuf_decode(
  "ObjectSimple",
)<ObjectSimple>(ObjectSimple)({
  decode: (input) => typia.protobuf.decode<ObjectSimple>(input),
  encode: typia.protobuf.createEncode<ObjectSimple>(),
});
