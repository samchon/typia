import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_protobuf_encode_TypeTagLength = _test_protobuf_encode(
    "TypeTagLength",
)<TypeTagLength>(TypeTagLength)({
    encode: typia.protobuf.createEncode<TypeTagLength>(),
    message: typia.protobuf.message<TypeTagLength>(),
    decode: typia.protobuf.createDecode<TypeTagLength>(),
});
