import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertDecode_ObjectGenericArray =
  _test_protobuf_assertDecode(TypeGuardError)(
    "ObjectGenericArray",
  )<ObjectGenericArray>(ObjectGenericArray)({
    decode: typia.protobuf.createAssertDecode<ObjectGenericArray>(),
    encode: typia.protobuf.createEncode<ObjectGenericArray>(),
  });
