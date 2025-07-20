import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_protobuf_createEncode_ObjectDescription = (): void =>
  _test_protobuf_encode("ObjectDescription")<ObjectDescription>(
    ObjectDescription,
  )({
    encode: typia.protobuf.createEncode<ObjectDescription>(),
    decode: typia.protobuf.createDecode<ObjectDescription>(),
    message: typia.protobuf.message<ObjectDescription>(),
  });
