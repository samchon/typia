import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_protobuf_decode_ObjectPartial = (): void =>
  _test_protobuf_decode("ObjectPartial")<ObjectPartial>(ObjectPartial)({
    decode: (input) => typia.protobuf.decode<ObjectPartial>(input),
    encode: typia.protobuf.createEncode<ObjectPartial>(),
  });
