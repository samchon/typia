import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_protobuf_createIsDecode_ObjectDescription =
  _test_protobuf_isDecode("ObjectDescription")<ObjectDescription>(
    ObjectDescription,
  )({
    decode: typia.protobuf.createIsDecode<ObjectDescription>(),
    encode: typia.protobuf.createEncode<ObjectDescription>(),
  });
