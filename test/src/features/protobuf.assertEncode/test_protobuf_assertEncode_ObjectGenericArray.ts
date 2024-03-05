import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_protobuf_assertEncode_ObjectGenericArray =
  _test_protobuf_assertEncode(TypeGuardError)(
    "ObjectGenericArray",
  )<ObjectGenericArray>(ObjectGenericArray)({
    encode: (input) => typia.protobuf.assertEncode<ObjectGenericArray>(input),
    decode: typia.protobuf.createDecode<ObjectGenericArray>(),
    message: typia.protobuf.message<ObjectGenericArray>(),
  });
