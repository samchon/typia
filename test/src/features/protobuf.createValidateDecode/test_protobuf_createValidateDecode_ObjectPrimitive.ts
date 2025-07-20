import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_protobuf_createValidateDecode_ObjectPrimitive = (): void =>
  _test_protobuf_validateDecode("ObjectPrimitive")<ObjectPrimitive>(
    ObjectPrimitive,
  )({
    decode: typia.protobuf.createValidateDecode<ObjectPrimitive>(),
    encode: typia.protobuf.createEncode<ObjectPrimitive>(),
  });
