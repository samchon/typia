import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_protobuf_isDecode_TypeTagTypeUnion = _test_protobuf_isDecode(
    "TypeTagTypeUnion",
)<TypeTagTypeUnion>(TypeTagTypeUnion)({
    isDecode: (input) => typia.protobuf.isDecode<TypeTagTypeUnion>(input),
    encode: typia.protobuf.createEncode<TypeTagTypeUnion>(),
});
