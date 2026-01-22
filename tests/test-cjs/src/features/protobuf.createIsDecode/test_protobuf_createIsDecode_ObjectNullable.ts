import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_protobuf_createIsDecode_ObjectNullable = (): void =>
  _test_protobuf_isDecode("ObjectNullable")<ObjectNullable>(ObjectNullable)({
    decode: typia.protobuf.createIsDecode<ObjectNullable>(),
    encode: typia.protobuf.createEncode<ObjectNullable>(),
  });
