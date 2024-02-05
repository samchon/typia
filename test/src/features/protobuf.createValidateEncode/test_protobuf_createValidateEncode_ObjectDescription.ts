import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_protobuf_createValidateEncode_ObjectDescription =
  _test_protobuf_validateEncode("ObjectDescription")<ObjectDescription>(
    ObjectDescription,
  )({
    encode: typia.protobuf.createValidateEncode<ObjectDescription>(),
    decode: typia.protobuf.createDecode<ObjectDescription>(),
    message: typia.protobuf.message<ObjectDescription>(),
  });
