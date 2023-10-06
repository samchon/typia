import typia from "../../../src";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_protobuf_createEncode_TypeTagDefault = _test_protobuf_encode(
    "TypeTagDefault",
)<TypeTagDefault>(TypeTagDefault)({
    encode: typia.protobuf.createEncode<TypeTagDefault>(),
    decode: typia.protobuf.createDecode<TypeTagDefault>(),
    message: typia.protobuf.message<TypeTagDefault>(),
});
