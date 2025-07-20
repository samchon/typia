import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_protobuf_createAssertDecodeCustom_ArraySimpleProtobuf =
  (): void =>
    _test_protobuf_assertDecode(CustomGuardError)(
      "ArraySimpleProtobuf",
    )<ArraySimpleProtobuf>(ArraySimpleProtobuf)({
      decode: typia.protobuf.createAssertDecode<ArraySimpleProtobuf>(
        (p) => new CustomGuardError(p),
      ),
      encode: typia.protobuf.createEncode<ArraySimpleProtobuf>(),
    });
