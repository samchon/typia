import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_protobuf_decode_ObjectHttpNullable = (): void => _test_protobuf_decode(
  "ObjectHttpNullable",
)<ObjectHttpNullable>(ObjectHttpNullable)({
  decode: (input) => typia.protobuf.decode<ObjectHttpNullable>(input),
  encode: typia.protobuf.createEncode<ObjectHttpNullable>(),
});
