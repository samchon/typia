import typia from "../../../src";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_protobuf_createEncode_TypeTagType = _test_protobuf_encode(
    "TypeTagType",
)<TypeTagType>(TypeTagType)({
    encode: (input) => typia.protobuf.encode<TypeTagType>(input),
    decode: typia.protobuf.createDecode<TypeTagType>(),
    message: typia.protobuf.message<TypeTagType>(),
});
