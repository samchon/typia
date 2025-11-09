import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_protobuf_createAssertDecodeCustom_ArraySimpleProtobufOptional =
  (): void =>
    _test_protobuf_assertDecode(CustomGuardError)(
      "ArraySimpleProtobufOptional",
    )<ArraySimpleProtobufOptional>(ArraySimpleProtobufOptional)({
      decode: typia.protobuf.createAssertDecode<ArraySimpleProtobufOptional>(
        (p) => new CustomGuardError(p),
      ),
      encode: typia.protobuf.createEncode<ArraySimpleProtobufOptional>(),
    });
