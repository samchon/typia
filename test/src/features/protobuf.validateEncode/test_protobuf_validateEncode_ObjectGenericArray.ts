import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_protobuf_validateEncode_ObjectGenericArray =
  _test_protobuf_validateEncode("ObjectGenericArray")<ObjectGenericArray>(
    ObjectGenericArray,
  )({
    encode: (input) => typia.protobuf.validateEncode<ObjectGenericArray>(input),
    decode: typia.protobuf.createDecode<ObjectGenericArray>(),
    message: typia.protobuf.message<ObjectGenericArray>(),
  });
