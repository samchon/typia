import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_protobuf_createIsDecode_TypeTagLength =
  _test_protobuf_isDecode("TypeTagLength")<TypeTagLength>(TypeTagLength)({
    decode: (input) => typia.protobuf.isDecode<TypeTagLength>(input),
    encode: typia.protobuf.createEncode<TypeTagLength>(),
  });
