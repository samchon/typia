import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

export const test_protobuf_assertEncodeCustom_ObjectSequenceProtobuf =
  (): void =>
    _test_protobuf_assertEncode(CustomGuardError)(
      "ObjectSequenceProtobuf",
    )<ObjectSequenceProtobuf>(ObjectSequenceProtobuf)({
      encode: (input) =>
        typia.protobuf.assertEncode<ObjectSequenceProtobuf>(
          input,
          (p) => new CustomGuardError(p),
        ),
      decode: typia.protobuf.createDecode<ObjectSequenceProtobuf>(),
      message: typia.protobuf.message<ObjectSequenceProtobuf>(),
    });
