import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_protobuf_decode_TypeTagBigInt = _test_protobuf_decode(
    "TypeTagBigInt",
)<TypeTagBigInt>(TypeTagBigInt)({
    decode: typia.protobuf.createDecode<TypeTagBigInt>(),
    encode: typia.protobuf.createEncode<TypeTagBigInt>(),
});
