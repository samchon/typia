import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_protobuf_encode_TypeTagRange = (): void =>
  _test_protobuf_encode("TypeTagRange")<TypeTagRange>(TypeTagRange)({
    encode: (input) => typia.protobuf.encode<TypeTagRange>(input),
    decode: typia.protobuf.createDecode<TypeTagRange>(),
    message: typia.protobuf.message<TypeTagRange>(),
  });
