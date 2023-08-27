import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_protobuf_isEncode_TypeTagTypeUnion = _test_protobuf_isEncode(
    "TypeTagTypeUnion",
)<TypeTagTypeUnion>(TypeTagTypeUnion)({
    isEncode: (input) => typia.protobuf.isEncode<TypeTagTypeUnion>(input),
    message: typia.protobuf.message<TypeTagTypeUnion>(),
    decode: typia.protobuf.createDecode<TypeTagTypeUnion>(),
});
