import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_protobuf_createValidateEncode_ObjectOptional =
  _test_protobuf_validateEncode("ObjectOptional")<ObjectOptional>(
    ObjectOptional,
  )({
    encode: typia.protobuf.createValidateEncode<ObjectOptional>(),
    decode: typia.protobuf.createDecode<ObjectOptional>(),
    message: typia.protobuf.message<ObjectOptional>(),
  });
