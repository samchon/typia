import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_protobuf_isEncode_TypeTagPattern = _test_protobuf_isEncode(
    "TypeTagPattern",
)<TypeTagPattern>(TypeTagPattern)({
    isEncode: (input) => typia.protobuf.isEncode<TypeTagPattern>(input),
    message: typia.protobuf.message<TypeTagPattern>(),
    decode: typia.protobuf.createDecode<TypeTagPattern>(),
});
