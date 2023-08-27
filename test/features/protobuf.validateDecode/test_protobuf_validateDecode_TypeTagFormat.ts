import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_protobuf_validateDecode_TypeTagFormat =
    _test_protobuf_validateDecode("TypeTagFormat")<TypeTagFormat>(
        TypeTagFormat,
    )({
        validateDecode: (input) =>
            typia.protobuf.validateDecode<TypeTagFormat>(input),
        encode: typia.protobuf.createEncode<TypeTagFormat>(),
    });
