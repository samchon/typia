import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_protobuf_createIsEncode_ObjectRequired =
    _test_protobuf_isEncode("ObjectRequired")<ObjectRequired>(ObjectRequired)({
        isEncode: typia.protobuf.createIsEncode<ObjectRequired>(),
        message: typia.protobuf.message<ObjectRequired>(),
        decode: typia.protobuf.createDecode<ObjectRequired>(),
    });
