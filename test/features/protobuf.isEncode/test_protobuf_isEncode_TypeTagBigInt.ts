import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_protobuf_isEncode_TypeTagBigInt = _test_protobuf_isEncode(
    "TypeTagBigInt",
)<TypeTagBigInt>(TypeTagBigInt)({
    isEncode: (input) => typia.protobuf.isEncode<TypeTagBigInt>(input),
    message: typia.protobuf.message<TypeTagBigInt>(),
    decode: typia.protobuf.createDecode<TypeTagBigInt>(),
});
