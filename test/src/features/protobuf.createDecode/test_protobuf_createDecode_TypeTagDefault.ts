import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_protobuf_createDecode_TypeTagDefault = (): void =>
  _test_protobuf_decode("TypeTagDefault")<TypeTagDefault>(TypeTagDefault)({
    decode: typia.protobuf.createDecode<TypeTagDefault>(),
    encode: typia.protobuf.createEncode<TypeTagDefault>(),
  });
