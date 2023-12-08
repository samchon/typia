import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_protobuf_createAssertDecode_ArraySimpleProtobuf =
  _test_protobuf_assertDecode("ArraySimpleProtobuf")<ArraySimpleProtobuf>(
    ArraySimpleProtobuf,
  )({
    decode: (input) => typia.protobuf.assertDecode<ArraySimpleProtobuf>(input),
    encode: typia.protobuf.createEncode<ArraySimpleProtobuf>(),
  });
