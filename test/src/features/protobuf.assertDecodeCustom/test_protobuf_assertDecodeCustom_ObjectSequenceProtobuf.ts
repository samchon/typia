import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

export const test_protobuf_assertDecodeCustom_ObjectSequenceProtobuf =
  _test_protobuf_assertDecode(CustomGuardError)(
    "ObjectSequenceProtobuf",
  )<ObjectSequenceProtobuf>(ObjectSequenceProtobuf)({
    decode: (input) =>
      typia.protobuf.assertDecode<ObjectSequenceProtobuf>(
        input,
        (p) => new CustomGuardError(p),
      ),
    encode: typia.protobuf.createEncode<ObjectSequenceProtobuf>(),
  });
