import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_protobuf_isDecode_TypeTagCustom = _test_protobuf_isDecode(
    "TypeTagCustom",
)<TypeTagCustom>(TypeTagCustom)({
    isDecode: (input) => typia.protobuf.isDecode<TypeTagCustom>(input),
    encode: typia.protobuf.createEncode<TypeTagCustom>(),
});
