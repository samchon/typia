import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_protobuf_createDecode_TypeTagCustom = _test_protobuf_decode(
    "TypeTagCustom",
)<TypeTagCustom>(TypeTagCustom)({
    decode: (input) => typia.protobuf.decode<TypeTagCustom>(input),
    encode: typia.protobuf.createEncode<TypeTagCustom>(),
});
