import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_protobuf_decode_ObjectRequired = (): void =>
  _test_protobuf_decode("ObjectRequired")<ObjectRequired>(ObjectRequired)({
    decode: (input) => typia.protobuf.decode<ObjectRequired>(input),
    encode: typia.protobuf.createEncode<ObjectRequired>(),
  });
