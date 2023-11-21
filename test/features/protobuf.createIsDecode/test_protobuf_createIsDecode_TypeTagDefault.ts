import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_protobuf_createIsDecode_TypeTagDefault =
  _test_protobuf_isDecode("TypeTagDefault")<TypeTagDefault>(TypeTagDefault)({
    decode: typia.protobuf.createIsDecode<TypeTagDefault>(),
    encode: typia.protobuf.createEncode<TypeTagDefault>(),
  });
