import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_protobuf_encode_TypeTagInfinite = _test_protobuf_encode(
    "TypeTagInfinite",
)<TypeTagInfinite>(TypeTagInfinite)({
    encode: (input) => typia.protobuf.encode<TypeTagInfinite>(input),
    message: typia.protobuf.message<TypeTagInfinite>(),
    decode: typia.protobuf.createDecode<TypeTagInfinite>(),
});
