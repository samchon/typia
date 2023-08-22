import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_protobuf_validateEncode_DynamicTree =
    _test_protobuf_validateEncode("DynamicTree")<DynamicTree>(DynamicTree)({
        validateEncode: typia.protobuf.createValidateEncode<DynamicTree>(),
        message: typia.protobuf.message<DynamicTree>(),
        decode: typia.protobuf.createDecode<DynamicTree>(),
    });
