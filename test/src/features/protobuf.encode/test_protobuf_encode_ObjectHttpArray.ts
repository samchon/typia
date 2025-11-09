import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_protobuf_encode_ObjectHttpArray = (): void =>
  _test_protobuf_encode("ObjectHttpArray")<ObjectHttpArray>(ObjectHttpArray)({
    encode: (input) => typia.protobuf.encode<ObjectHttpArray>(input),
    decode: typia.protobuf.createDecode<ObjectHttpArray>(),
    message: typia.protobuf.message<ObjectHttpArray>(),
  });
