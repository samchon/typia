import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_protobuf_decode_ObjectNullable = _test_protobuf_decode(
  "ObjectNullable",
)<ObjectNullable>(ObjectNullable)({
  decode: (input) => typia.protobuf.decode<ObjectNullable>(input),
  encode: typia.protobuf.createEncode<ObjectNullable>(),
});
