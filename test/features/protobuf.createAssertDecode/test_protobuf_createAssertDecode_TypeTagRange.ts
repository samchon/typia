import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_protobuf_createAssertDecode_TypeTagRange =
  _test_protobuf_assertDecode("TypeTagRange")<TypeTagRange>(TypeTagRange)({
    decode: typia.protobuf.createAssertDecode<TypeTagRange>(),
    encode: typia.protobuf.createEncode<TypeTagRange>(),
  });
