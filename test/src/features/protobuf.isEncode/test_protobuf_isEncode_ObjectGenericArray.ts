import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_protobuf_isEncode_ObjectGenericArray =
  _test_protobuf_isEncode("ObjectGenericArray")<ObjectGenericArray>(
    ObjectGenericArray,
  )({
    encode: (input) => typia.protobuf.isEncode<ObjectGenericArray>(input),
    decode: typia.protobuf.createDecode<ObjectGenericArray>(),
    message: typia.protobuf.message<ObjectGenericArray>(),
  });
