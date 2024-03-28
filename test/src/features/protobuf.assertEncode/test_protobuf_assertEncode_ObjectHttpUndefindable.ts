import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_protobuf_assertEncode_ObjectHttpUndefindable =
  _test_protobuf_assertEncode(TypeGuardError)(
    "ObjectHttpUndefindable",
  )<ObjectHttpUndefindable>(ObjectHttpUndefindable)({
    encode: (input) =>
      typia.protobuf.assertEncode<ObjectHttpUndefindable>(input),
    decode: typia.protobuf.createDecode<ObjectHttpUndefindable>(),
    message: typia.protobuf.message<ObjectHttpUndefindable>(),
  });
