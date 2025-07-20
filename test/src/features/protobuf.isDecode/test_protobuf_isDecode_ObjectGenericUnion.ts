import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_protobuf_isDecode_ObjectGenericUnion = (): void =>
  _test_protobuf_isDecode("ObjectGenericUnion")<ObjectGenericUnion>(
    ObjectGenericUnion,
  )({
    decode: (input) => typia.protobuf.isDecode<ObjectGenericUnion>(input),
    encode: typia.protobuf.createEncode<ObjectGenericUnion>(),
  });
