import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_protobuf_createIsEncode_ObjectDescription =
  _test_protobuf_isEncode("ObjectDescription")<ObjectDescription>(
    ObjectDescription,
  )({
    encode: typia.protobuf.createIsEncode<ObjectDescription>(),
    decode: typia.protobuf.createDecode<ObjectDescription>(),
    message: typia.protobuf.message<ObjectDescription>(),
  });
