import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_protobuf_createDecode_DynamicSimple = _test_protobuf_decode(
  "DynamicSimple",
)<DynamicSimple>(DynamicSimple)({
  decode: typia.protobuf.createDecode<DynamicSimple>(),
  encode: typia.protobuf.createEncode<DynamicSimple>(),
});
