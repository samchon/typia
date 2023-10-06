import typia from "../../../src";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_protobuf_createEncode_TypeTagFormat = _test_protobuf_encode(
    "TypeTagFormat",
)<TypeTagFormat>(TypeTagFormat)({
    encode: (input) => typia.protobuf.encode<TypeTagFormat>(input),
    decode: typia.protobuf.createDecode<TypeTagFormat>(),
    message: typia.protobuf.message<TypeTagFormat>(),
});
