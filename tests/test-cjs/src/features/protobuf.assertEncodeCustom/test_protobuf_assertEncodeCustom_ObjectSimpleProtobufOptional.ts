import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_protobuf_assertEncodeCustom_ObjectSimpleProtobufOptional =
  (): void =>
    _test_protobuf_assertEncode(CustomGuardError)(
      "ObjectSimpleProtobufOptional",
    )<ObjectSimpleProtobufOptional>(ObjectSimpleProtobufOptional)({
      encode: (input) =>
        typia.protobuf.assertEncode<ObjectSimpleProtobufOptional>(
          input,
          (p) => new CustomGuardError(p),
        ),
      decode: typia.protobuf.createDecode<ObjectSimpleProtobufOptional>(),
      message: typia.protobuf.message<ObjectSimpleProtobufOptional>(),
    });
