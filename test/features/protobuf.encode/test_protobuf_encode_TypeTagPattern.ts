import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_protobuf_createEncode_TypeTagPattern = _test_protobuf_encode(
    "TypeTagPattern",
)<TypeTagPattern>(TypeTagPattern)({
    encode: (input) => typia.protobuf.encode<TypeTagPattern>(input),
    decode: typia.protobuf.createDecode<TypeTagPattern>(),
    message: typia.protobuf.message<TypeTagPattern>(),
});
