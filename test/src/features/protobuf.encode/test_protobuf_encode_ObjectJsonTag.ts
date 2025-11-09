import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_protobuf_encode_ObjectJsonTag = (): void =>
  _test_protobuf_encode("ObjectJsonTag")<ObjectJsonTag>(ObjectJsonTag)({
    encode: (input) => typia.protobuf.encode<ObjectJsonTag>(input),
    decode: typia.protobuf.createDecode<ObjectJsonTag>(),
    message: typia.protobuf.message<ObjectJsonTag>(),
  });
