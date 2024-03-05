import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_protobuf_validateDecode_ObjectDescription =
  _test_protobuf_validateDecode("ObjectDescription")<ObjectDescription>(
    ObjectDescription,
  )({
    decode: (input) => typia.protobuf.validateDecode<ObjectDescription>(input),
    encode: typia.protobuf.createEncode<ObjectDescription>(),
  });
