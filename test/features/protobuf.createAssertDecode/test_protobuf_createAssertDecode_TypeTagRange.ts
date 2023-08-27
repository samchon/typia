import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_protobuf_assertDecode_TypeTagRange =
    _test_protobuf_assertDecode("TypeTagRange")<TypeTagRange>(TypeTagRange)({
        assertDecode: typia.protobuf.createAssertDecode<TypeTagRange>(),
        encode: typia.protobuf.createEncode<TypeTagRange>(),
    });
