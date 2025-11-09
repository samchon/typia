import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_protobuf_encode_TypeTagLength = (): void => _test_protobuf_encode(
  "TypeTagLength",
)<TypeTagLength>(TypeTagLength)({
  encode: (input) => typia.protobuf.encode<TypeTagLength>(input),
  decode: typia.protobuf.createDecode<TypeTagLength>(),
  message: typia.protobuf.message<TypeTagLength>(),
});
