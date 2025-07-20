import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_protobuf_assertEncodeCustom_ObjectSimpleProtobufNullable =
  (): void =>
    _test_protobuf_assertEncode(CustomGuardError)(
      "ObjectSimpleProtobufNullable",
    )<ObjectSimpleProtobufNullable>(ObjectSimpleProtobufNullable)({
      encode: (input) =>
        typia.protobuf.assertEncode<ObjectSimpleProtobufNullable>(
          input,
          (p) => new CustomGuardError(p),
        ),
      decode: typia.protobuf.createDecode<ObjectSimpleProtobufNullable>(),
      message: typia.protobuf.message<ObjectSimpleProtobufNullable>(),
    });
