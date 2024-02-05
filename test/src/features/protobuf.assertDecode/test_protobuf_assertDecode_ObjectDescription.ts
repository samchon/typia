import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_protobuf_createAssertDecode_ObjectDescription =
  _test_protobuf_assertDecode("ObjectDescription")<ObjectDescription>(
    ObjectDescription,
  )({
    decode: (input) => typia.protobuf.assertDecode<ObjectDescription>(input),
    encode: typia.protobuf.createEncode<ObjectDescription>(),
  });
