import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_protobuf_createIsEncode_DynamicSimple = (): void => _test_protobuf_isEncode(
  "DynamicSimple",
)<DynamicSimple>(DynamicSimple)({
  encode: typia.protobuf.createIsEncode<DynamicSimple>(),
  decode: typia.protobuf.createDecode<DynamicSimple>(),
  message: typia.protobuf.message<DynamicSimple>(),
});
