import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_protobuf_encode_ObjectGenericArray = (): void =>
  _test_protobuf_encode("ObjectGenericArray")<ObjectGenericArray>(
    ObjectGenericArray,
  )({
    encode: (input) => typia.protobuf.encode<ObjectGenericArray>(input),
    decode: typia.protobuf.createDecode<ObjectGenericArray>(),
    message: typia.protobuf.message<ObjectGenericArray>(),
  });
