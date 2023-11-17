import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_protobuf_createIsDecode_TypeTagTypeBigInt =
  _test_protobuf_isDecode("TypeTagTypeBigInt")<TypeTagTypeBigInt>(
    TypeTagTypeBigInt,
  )({
    decode: typia.protobuf.createIsDecode<TypeTagTypeBigInt>(),
    encode: typia.protobuf.createEncode<TypeTagTypeBigInt>(),
  });
