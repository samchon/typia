import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_protobuf_isEncode_TypeTagFormat = _test_protobuf_isEncode(
    "TypeTagFormat",
)<TypeTagFormat>(TypeTagFormat)({
    isEncode: typia.protobuf.createIsEncode<TypeTagFormat>(),
    message: typia.protobuf.message<TypeTagFormat>(),
    decode: typia.protobuf.createDecode<TypeTagFormat>(),
});
