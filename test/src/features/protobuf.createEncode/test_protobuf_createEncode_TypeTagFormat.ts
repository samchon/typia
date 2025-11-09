import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_protobuf_createEncode_TypeTagFormat = (): void =>
  _test_protobuf_encode("TypeTagFormat")<TypeTagFormat>(TypeTagFormat)({
    encode: typia.protobuf.createEncode<TypeTagFormat>(),
    decode: typia.protobuf.createDecode<TypeTagFormat>(),
    message: typia.protobuf.message<TypeTagFormat>(),
  });
