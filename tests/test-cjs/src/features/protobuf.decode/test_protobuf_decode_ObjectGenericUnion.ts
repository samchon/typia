import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_protobuf_decode_ObjectGenericUnion = (): void =>
  _test_protobuf_decode("ObjectGenericUnion")<ObjectGenericUnion>(
    ObjectGenericUnion,
  )({
    decode: (input) => typia.protobuf.decode<ObjectGenericUnion>(input),
    encode: typia.protobuf.createEncode<ObjectGenericUnion>(),
  });
