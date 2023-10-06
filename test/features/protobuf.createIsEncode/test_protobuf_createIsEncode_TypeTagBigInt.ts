import typia from "../../../src";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_protobuf_createIsEncode_TypeTagBigInt = _test_protobuf_isEncode(
    "TypeTagBigInt",
)<TypeTagBigInt>(TypeTagBigInt)({
    encode: typia.protobuf.createIsEncode<TypeTagBigInt>(),
    decode: typia.protobuf.createDecode<TypeTagBigInt>(),
    message: typia.protobuf.message<TypeTagBigInt>(),
});
