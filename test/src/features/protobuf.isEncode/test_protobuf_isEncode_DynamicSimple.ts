import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_protobuf_isEncode_DynamicSimple = (): void =>
  _test_protobuf_isEncode("DynamicSimple")<DynamicSimple>(DynamicSimple)({
    encode: (input) => typia.protobuf.isEncode<DynamicSimple>(input),
    decode: typia.protobuf.createDecode<DynamicSimple>(),
    message: typia.protobuf.message<DynamicSimple>(),
  });
