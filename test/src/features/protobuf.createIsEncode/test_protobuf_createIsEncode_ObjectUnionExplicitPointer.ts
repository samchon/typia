import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_protobuf_createIsEncode_ObjectUnionExplicitPointer =
  (): void =>
    _test_protobuf_isEncode(
      "ObjectUnionExplicitPointer",
    )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)({
      encode: typia.protobuf.createIsEncode<ObjectUnionExplicitPointer>(),
      decode: typia.protobuf.createDecode<ObjectUnionExplicitPointer>(),
      message: typia.protobuf.message<ObjectUnionExplicitPointer>(),
    });
