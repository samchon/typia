import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_protobuf_decode_ObjectUnionCompositePointer = (): void =>
  _test_protobuf_decode(
    "ObjectUnionCompositePointer",
  )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)({
    decode: (input) =>
      typia.protobuf.decode<ObjectUnionCompositePointer>(input),
    encode: typia.protobuf.createEncode<ObjectUnionCompositePointer>(),
  });
