import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_protobuf_createIsEncode_TypeTagType = _test_protobuf_isEncode(
    "TypeTagType",
)<TypeTagType>(TypeTagType)({
    isEncode: typia.protobuf.createIsEncode<TypeTagType>(),
    message: typia.protobuf.message<TypeTagType>(),
    decode: typia.protobuf.createDecode<TypeTagType>(),
});
