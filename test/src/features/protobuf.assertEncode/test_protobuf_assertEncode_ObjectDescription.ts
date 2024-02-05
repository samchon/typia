import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_protobuf_createAssertEncode_ObjectDescription =
  _test_protobuf_assertEncode("ObjectDescription")<ObjectDescription>(
    ObjectDescription,
  )({
    encode: (input) => typia.protobuf.assertEncode<ObjectDescription>(input),
    decode: typia.protobuf.createDecode<ObjectDescription>(),
    message: typia.protobuf.message<ObjectDescription>(),
  });
