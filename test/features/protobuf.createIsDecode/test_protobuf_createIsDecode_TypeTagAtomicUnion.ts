import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_protobuf_isDecode_TypeTagAtomicUnion =
    _test_protobuf_isDecode("TypeTagAtomicUnion")<TypeTagAtomicUnion>(
        TypeTagAtomicUnion,
    )({
        isDecode: typia.protobuf.createIsDecode<TypeTagAtomicUnion>(),
        encode: typia.protobuf.createEncode<TypeTagAtomicUnion>(),
    });
