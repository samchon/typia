import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_protobuf_encode_DynamicConstant = _test_protobuf_encode(
  "DynamicConstant",
)<DynamicConstant>(DynamicConstant)({
  encode: (input) => typia.protobuf.encode<DynamicConstant>(input),
  decode: typia.protobuf.createDecode<DynamicConstant>(),
  message: typia.protobuf.message<DynamicConstant>(),
});
