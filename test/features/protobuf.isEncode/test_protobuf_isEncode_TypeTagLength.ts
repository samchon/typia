import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_protobuf_isEncode_TypeTagLength = _test_protobuf_isEncode(
    "TypeTagLength",
)<TypeTagLength>(TypeTagLength)({
    isEncode: (input) => typia.protobuf.isEncode<TypeTagLength>(input),
    message: typia.protobuf.message<TypeTagLength>(),
    decode: typia.protobuf.createDecode<TypeTagLength>(),
});
