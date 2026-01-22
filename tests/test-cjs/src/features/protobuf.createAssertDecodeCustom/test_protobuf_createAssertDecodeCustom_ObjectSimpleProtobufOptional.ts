import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_protobuf_createAssertDecodeCustom_ObjectSimpleProtobufOptional =
  (): void =>
    _test_protobuf_assertDecode(CustomGuardError)(
      "ObjectSimpleProtobufOptional",
    )<ObjectSimpleProtobufOptional>(ObjectSimpleProtobufOptional)({
      decode: typia.protobuf.createAssertDecode<ObjectSimpleProtobufOptional>(
        (p) => new CustomGuardError(p),
      ),
      encode: typia.protobuf.createEncode<ObjectSimpleProtobufOptional>(),
    });
