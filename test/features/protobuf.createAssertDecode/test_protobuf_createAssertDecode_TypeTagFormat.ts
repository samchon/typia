import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_protobuf_assertDecode_TypeTagFormat =
    _test_protobuf_assertDecode("TypeTagFormat")<TypeTagFormat>(TypeTagFormat)({
        assertDecode: typia.protobuf.createAssertDecode<TypeTagFormat>(),
        encode: typia.protobuf.createEncode<TypeTagFormat>(),
    });
