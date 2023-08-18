import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_protobuf_isEncode_DynamicTree =
    _test_protobuf_isEncode<DynamicTree>(DynamicTree)({
        isEncode: typia.protobuf.createIsEncode<DynamicTree>(),
        message: typia.protobuf.message<DynamicTree>(),
    });
