import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_protobuf_decode_TypeTagNaN = _test_protobuf_decode(
    "TypeTagNaN",
)<TypeTagNaN>(TypeTagNaN)({
    decode: (input) => typia.protobuf.decode<TypeTagNaN>(input),
    encode: typia.protobuf.createEncode<TypeTagNaN>(),
});
