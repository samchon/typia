import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_protobuf_encode_TypeTagRangeBigInt = _test_protobuf_encode(
    "TypeTagRangeBigInt",
)<TypeTagRangeBigInt>(TypeTagRangeBigInt)({
    encode: (input) => typia.protobuf.encode<TypeTagRangeBigInt>(input),
    message: typia.protobuf.message<TypeTagRangeBigInt>(),
    decode: typia.protobuf.createDecode<TypeTagRangeBigInt>(),
});
