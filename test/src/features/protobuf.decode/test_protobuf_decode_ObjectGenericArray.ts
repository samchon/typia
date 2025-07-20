import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_protobuf_decode_ObjectGenericArray = (): void =>
  _test_protobuf_decode("ObjectGenericArray")<ObjectGenericArray>(
    ObjectGenericArray,
  )({
    decode: (input) => typia.protobuf.decode<ObjectGenericArray>(input),
    encode: typia.protobuf.createEncode<ObjectGenericArray>(),
  });
