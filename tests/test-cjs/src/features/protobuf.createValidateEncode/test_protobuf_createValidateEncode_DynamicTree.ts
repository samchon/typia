import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_protobuf_createValidateEncode_DynamicTree = (): void =>
  _test_protobuf_validateEncode("DynamicTree")<DynamicTree>(DynamicTree)({
    encode: typia.protobuf.createValidateEncode<DynamicTree>(),
    decode: typia.protobuf.createDecode<DynamicTree>(),
    message: typia.protobuf.message<DynamicTree>(),
  });
