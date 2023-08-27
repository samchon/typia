import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_protobuf_isEncode_TypeTagType = _test_protobuf_isEncode(
    "TypeTagType",
)<TypeTagType>(TypeTagType)({
    isEncode: (input) => typia.protobuf.isEncode<TypeTagType>(input),
    message: typia.protobuf.message<TypeTagType>(),
    decode: typia.protobuf.createDecode<TypeTagType>(),
});
