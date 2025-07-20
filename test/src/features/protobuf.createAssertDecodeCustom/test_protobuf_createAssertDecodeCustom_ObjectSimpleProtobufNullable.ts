import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_protobuf_createAssertDecodeCustom_ObjectSimpleProtobufNullable =
  (): void =>
    _test_protobuf_assertDecode(CustomGuardError)(
      "ObjectSimpleProtobufNullable",
    )<ObjectSimpleProtobufNullable>(ObjectSimpleProtobufNullable)({
      decode: typia.protobuf.createAssertDecode<ObjectSimpleProtobufNullable>(
        (p) => new CustomGuardError(p),
      ),
      encode: typia.protobuf.createEncode<ObjectSimpleProtobufNullable>(),
    });
