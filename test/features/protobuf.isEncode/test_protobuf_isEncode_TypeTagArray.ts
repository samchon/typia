import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_protobuf_isEncode_TypeTagArray = _test_protobuf_isEncode(
    "TypeTagArray",
)<TypeTagArray>(TypeTagArray)({
    isEncode: (input) => typia.protobuf.isEncode<TypeTagArray>(input),
    message: typia.protobuf.message<TypeTagArray>(),
    decode: typia.protobuf.createDecode<TypeTagArray>(),
});
