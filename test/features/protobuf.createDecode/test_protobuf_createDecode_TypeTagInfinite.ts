import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_protobuf_decode_TypeTagInfinite = _test_protobuf_decode(
    "TypeTagInfinite",
)<TypeTagInfinite>(TypeTagInfinite)({
    decode: typia.protobuf.createDecode<TypeTagInfinite>(),
    encode: typia.protobuf.createEncode<TypeTagInfinite>(),
});
