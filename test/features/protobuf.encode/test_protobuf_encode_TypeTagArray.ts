import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_protobuf_encode_TypeTagArray = _test_protobuf_encode(
    "TypeTagArray",
)<TypeTagArray>(TypeTagArray)({
    encode: (input) => typia.protobuf.encode<TypeTagArray>(input),
    message: typia.protobuf.message<TypeTagArray>(),
    decode: typia.protobuf.createDecode<TypeTagArray>(),
});
