import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_protobuf_decode_TypeTagType = (): void => _test_protobuf_decode(
  "TypeTagType",
)<TypeTagType>(TypeTagType)({
  decode: (input) => typia.protobuf.decode<TypeTagType>(input),
  encode: typia.protobuf.createEncode<TypeTagType>(),
});
