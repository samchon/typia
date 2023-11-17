import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_protobuf_createIsDecode_TypeTagType = _test_protobuf_isDecode(
  "TypeTagType",
)<TypeTagType>(TypeTagType)({
  decode: typia.protobuf.createIsDecode<TypeTagType>(),
  encode: typia.protobuf.createEncode<TypeTagType>(),
});
