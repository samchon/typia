import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_protobuf_assertDecodeCustom_ArraySimpleProtobufOptional =
  (): void =>
    _test_protobuf_assertDecode(CustomGuardError)(
      "ArraySimpleProtobufOptional",
    )<ArraySimpleProtobufOptional>(ArraySimpleProtobufOptional)({
      decode: (input) =>
        typia.protobuf.assertDecode<ArraySimpleProtobufOptional>(
          input,
          (p) => new CustomGuardError(p),
        ),
      encode: typia.protobuf.createEncode<ArraySimpleProtobufOptional>(),
    });
