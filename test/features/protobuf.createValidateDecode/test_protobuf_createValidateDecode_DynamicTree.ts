import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_protobuf_createValidateDecode_DynamicTree =
    _test_protobuf_validateDecode("DynamicTree")<DynamicTree>(DynamicTree)({
        decode: typia.protobuf.createValidateDecode<DynamicTree>(),
        encode: typia.protobuf.createEncode<DynamicTree>(),
    });
