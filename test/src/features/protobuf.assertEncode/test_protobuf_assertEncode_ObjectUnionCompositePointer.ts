import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

import { TypeGuardError } from "typia";

export const test_protobuf_assertEncode_ObjectUnionCompositePointer =
  _test_protobuf_assertEncode(TypeGuardError)(
    "ObjectUnionCompositePointer",
  )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)({
    encode: (input) =>
      typia.protobuf.assertEncode<ObjectUnionCompositePointer>(input),
    decode: typia.protobuf.createDecode<ObjectUnionCompositePointer>(),
    message: typia.protobuf.message<ObjectUnionCompositePointer>(),
  });
