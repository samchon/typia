import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_protobuf_createAssertEncode_ObjectGenericArray =
  _test_protobuf_assertEncode("ObjectGenericArray")<ObjectGenericArray>(
    ObjectGenericArray,
  )({
    encode: typia.protobuf.createAssertEncode<ObjectGenericArray>(),
    decode: typia.protobuf.createDecode<ObjectGenericArray>(),
    message: typia.protobuf.message<ObjectGenericArray>(),
  });
