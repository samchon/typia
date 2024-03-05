import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_protobuf_isEncode_DynamicConstant = _test_protobuf_isEncode(
  "DynamicConstant",
)<DynamicConstant>(DynamicConstant)({
  encode: (input) => typia.protobuf.isEncode<DynamicConstant>(input),
  decode: typia.protobuf.createDecode<DynamicConstant>(),
  message: typia.protobuf.message<DynamicConstant>(),
});
