import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_protobuf_validateEncode_ObjectUnionCompositePointer =
  (): void =>
    _test_protobuf_validateEncode(
      "ObjectUnionCompositePointer",
    )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)({
      encode: (input) =>
        typia.protobuf.validateEncode<ObjectUnionCompositePointer>(input),
      decode: typia.protobuf.createDecode<ObjectUnionCompositePointer>(),
      message: typia.protobuf.message<ObjectUnionCompositePointer>(),
    });
