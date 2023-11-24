import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_protobuf_createValidateEncode_ObjectPartial =
  _test_protobuf_validateEncode("ObjectPartial")<ObjectPartial>(ObjectPartial)({
    encode: typia.protobuf.createValidateEncode<ObjectPartial>(),
    decode: typia.protobuf.createDecode<ObjectPartial>(),
    message: typia.protobuf.message<ObjectPartial>(),
  });
