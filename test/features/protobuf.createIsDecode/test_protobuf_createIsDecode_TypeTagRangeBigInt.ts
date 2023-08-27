import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_protobuf_isDecode_TypeTagRangeBigInt =
    _test_protobuf_isDecode("TypeTagRangeBigInt")<TypeTagRangeBigInt>(
        TypeTagRangeBigInt,
    )({
        isDecode: typia.protobuf.createIsDecode<TypeTagRangeBigInt>(),
        encode: typia.protobuf.createEncode<TypeTagRangeBigInt>(),
    });
