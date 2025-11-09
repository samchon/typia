import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

export const test_protobuf_createAssertDecode_ObjectSequenceProtobuf =
  (): void =>
    _test_protobuf_assertDecode(TypeGuardError)(
      "ObjectSequenceProtobuf",
    )<ObjectSequenceProtobuf>(ObjectSequenceProtobuf)({
      decode: typia.protobuf.createAssertDecode<ObjectSequenceProtobuf>(),
      encode: typia.protobuf.createEncode<ObjectSequenceProtobuf>(),
    });
