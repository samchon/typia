import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_protobuf_isDecode_TypeTagNaN = _test_protobuf_isDecode(
    "TypeTagNaN",
)<TypeTagNaN>(TypeTagNaN)({
    isDecode: typia.protobuf.createIsDecode<TypeTagNaN>(),
    encode: typia.protobuf.createEncode<TypeTagNaN>(),
});
