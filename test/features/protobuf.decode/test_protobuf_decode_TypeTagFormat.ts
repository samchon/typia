import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_protobuf_decode_TypeTagFormat = _test_protobuf_decode(
    "TypeTagFormat",
)<TypeTagFormat>(TypeTagFormat)({
    decode: (input) => typia.protobuf.decode<TypeTagFormat>(input),
    encode: typia.protobuf.createEncode<TypeTagFormat>(),
});
