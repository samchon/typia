import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_protobuf_assertDecode_ObjectDescription =
  _test_protobuf_assertDecode(TypeGuardError)(
    "ObjectDescription",
  )<ObjectDescription>(ObjectDescription)({
    decode: (input) => typia.protobuf.assertDecode<ObjectDescription>(input),
    encode: typia.protobuf.createEncode<ObjectDescription>(),
  });
