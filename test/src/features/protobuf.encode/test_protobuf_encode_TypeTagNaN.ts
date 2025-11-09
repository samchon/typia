import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_protobuf_encode_TypeTagNaN = (): void =>
  _test_protobuf_encode("TypeTagNaN")<TypeTagNaN>(TypeTagNaN)({
    encode: (input) => typia.protobuf.encode<TypeTagNaN>(input),
    decode: typia.protobuf.createDecode<TypeTagNaN>(),
    message: typia.protobuf.message<TypeTagNaN>(),
  });
