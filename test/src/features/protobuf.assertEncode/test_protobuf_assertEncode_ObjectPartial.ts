import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_protobuf_assertEncode_ObjectPartial = (): void =>
  _test_protobuf_assertEncode(TypeGuardError)("ObjectPartial")<ObjectPartial>(
    ObjectPartial,
  )({
    encode: (input) => typia.protobuf.assertEncode<ObjectPartial>(input),
    decode: typia.protobuf.createDecode<ObjectPartial>(),
    message: typia.protobuf.message<ObjectPartial>(),
  });
