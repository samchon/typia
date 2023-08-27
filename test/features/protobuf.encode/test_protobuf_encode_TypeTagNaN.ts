import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_protobuf_encode_TypeTagNaN = _test_protobuf_encode(
    "TypeTagNaN",
)<TypeTagNaN>(TypeTagNaN)({
    encode: (input) => typia.protobuf.encode<TypeTagNaN>(input),
    message: typia.protobuf.message<TypeTagNaN>(),
    decode: typia.protobuf.createDecode<TypeTagNaN>(),
});
