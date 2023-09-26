import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_protobuf_createDecode_TypeTagType = _test_protobuf_decode(
    "TypeTagType",
)<TypeTagType>(TypeTagType)({
    decode: typia.protobuf.createDecode<TypeTagType>(),
    encode: typia.protobuf.createEncode<TypeTagType>(),
});
