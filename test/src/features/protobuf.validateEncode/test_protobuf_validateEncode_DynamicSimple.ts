import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_protobuf_validateEncode_DynamicSimple = (): void =>
  _test_protobuf_validateEncode("DynamicSimple")<DynamicSimple>(DynamicSimple)({
    encode: (input) => typia.protobuf.validateEncode<DynamicSimple>(input),
    decode: typia.protobuf.createDecode<DynamicSimple>(),
    message: typia.protobuf.message<DynamicSimple>(),
  });
