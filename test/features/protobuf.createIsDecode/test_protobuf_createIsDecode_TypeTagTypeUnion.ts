import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_protobuf_createIsDecode_TypeTagTypeUnion =
    _test_protobuf_isDecode("TypeTagTypeUnion")<TypeTagTypeUnion>(
        TypeTagTypeUnion,
    )({
        isDecode: typia.protobuf.createIsDecode<TypeTagTypeUnion>(),
        encode: typia.protobuf.createEncode<TypeTagTypeUnion>(),
    });
