import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_protobuf_isDecode_TypeTagBigInt = _test_protobuf_isDecode(
    "TypeTagBigInt",
)<TypeTagBigInt>(TypeTagBigInt)({
    isDecode: typia.protobuf.createIsDecode<TypeTagBigInt>(),
    encode: typia.protobuf.createEncode<TypeTagBigInt>(),
});
