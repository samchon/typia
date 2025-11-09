import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_protobuf_validateEncode_ObjectJsonTag = (): void =>
  _test_protobuf_validateEncode("ObjectJsonTag")<ObjectJsonTag>(ObjectJsonTag)({
    encode: (input) => typia.protobuf.validateEncode<ObjectJsonTag>(input),
    decode: typia.protobuf.createDecode<ObjectJsonTag>(),
    message: typia.protobuf.message<ObjectJsonTag>(),
  });
