import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_protobuf_encode_TypeTagDefault = _test_protobuf_encode(
    "TypeTagDefault",
)<TypeTagDefault>(TypeTagDefault)({
    encode: (input) => typia.protobuf.encode<TypeTagDefault>(input),
    message: typia.protobuf.message<TypeTagDefault>(),
    decode: typia.protobuf.createDecode<TypeTagDefault>(),
});
