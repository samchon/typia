import typia from "../../../src";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_protobuf_createEncode_TypeTagBigInt = _test_protobuf_encode(
    "TypeTagBigInt",
)<TypeTagBigInt>(TypeTagBigInt)({
    encode: (input) => typia.protobuf.encode<TypeTagBigInt>(input),
    decode: typia.protobuf.createDecode<TypeTagBigInt>(),
    message: typia.protobuf.message<TypeTagBigInt>(),
});
