import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_protobuf_validateDecode_TypeTagRange =
    _test_protobuf_validateDecode("TypeTagRange")<TypeTagRange>(TypeTagRange)({
        validateDecode: (input) =>
            typia.protobuf.validateDecode<TypeTagRange>(input),
        encode: typia.protobuf.createEncode<TypeTagRange>(),
    });
