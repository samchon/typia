import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_protobuf_createIsDecode_TypeTagPattern =
  _test_protobuf_isDecode("TypeTagPattern")<TypeTagPattern>(TypeTagPattern)({
    decode: typia.protobuf.createIsDecode<TypeTagPattern>(),
    encode: typia.protobuf.createEncode<TypeTagPattern>(),
  });
