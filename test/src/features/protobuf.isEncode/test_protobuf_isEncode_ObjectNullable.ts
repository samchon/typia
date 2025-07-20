import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_protobuf_isEncode_ObjectNullable = (): void =>
  _test_protobuf_isEncode("ObjectNullable")<ObjectNullable>(ObjectNullable)({
    encode: (input) => typia.protobuf.isEncode<ObjectNullable>(input),
    decode: typia.protobuf.createDecode<ObjectNullable>(),
    message: typia.protobuf.message<ObjectNullable>(),
  });
