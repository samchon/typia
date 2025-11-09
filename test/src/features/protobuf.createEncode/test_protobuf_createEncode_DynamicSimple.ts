import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_protobuf_createEncode_DynamicSimple = (): void =>
  _test_protobuf_encode("DynamicSimple")<DynamicSimple>(DynamicSimple)({
    encode: typia.protobuf.createEncode<DynamicSimple>(),
    decode: typia.protobuf.createDecode<DynamicSimple>(),
    message: typia.protobuf.message<DynamicSimple>(),
  });
