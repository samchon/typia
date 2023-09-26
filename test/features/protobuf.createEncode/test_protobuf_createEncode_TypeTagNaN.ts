import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_protobuf_createEncode_TypeTagNaN = _test_protobuf_encode(
    "TypeTagNaN",
)<TypeTagNaN>(TypeTagNaN)({
    encode: typia.protobuf.createEncode<TypeTagNaN>(),
    message: typia.protobuf.message<TypeTagNaN>(),
    decode: typia.protobuf.createDecode<TypeTagNaN>(),
});
