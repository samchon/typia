import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_protobuf_assertDecodeCustom_CommentTagAtomicUnion =
  _test_protobuf_assertDecode(CustomGuardError)(
    "CommentTagAtomicUnion",
  )<CommentTagAtomicUnion>(CommentTagAtomicUnion)({
    decode: (input) =>
      typia.protobuf.assertDecode<CommentTagAtomicUnion>(
        input,
        (p) => new CustomGuardError(p),
      ),
    encode: typia.protobuf.createEncode<CommentTagAtomicUnion>(),
  });
