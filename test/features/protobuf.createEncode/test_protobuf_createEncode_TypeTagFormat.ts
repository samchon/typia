import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_protobuf_encode_TypeTagFormat = _test_protobuf_encode(
    "TypeTagFormat",
)<TypeTagFormat>(TypeTagFormat)({
    encode: typia.protobuf.createEncode<TypeTagFormat>(),
    message: typia.protobuf.message<TypeTagFormat>(),
    decode: typia.protobuf.createDecode<TypeTagFormat>(),
});
