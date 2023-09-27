import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_protobuf_isEncode_TypeTagDefault = _test_protobuf_isEncode(
    "TypeTagDefault",
)<TypeTagDefault>(TypeTagDefault)({
    isEncode: (input) => typia.protobuf.isEncode<TypeTagDefault>(input),
    message: typia.protobuf.message<TypeTagDefault>(),
    decode: typia.protobuf.createDecode<TypeTagDefault>(),
});
