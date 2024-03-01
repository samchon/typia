import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_protobuf_decode_ObjectHttpTypeTag = _test_protobuf_decode(
  "ObjectHttpTypeTag",
)<ObjectHttpTypeTag>(ObjectHttpTypeTag)({
  decode: (input) => typia.protobuf.decode<ObjectHttpTypeTag>(input),
  encode: typia.protobuf.createEncode<ObjectHttpTypeTag>(),
});
