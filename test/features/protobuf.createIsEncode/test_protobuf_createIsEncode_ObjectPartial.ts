import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_protobuf_createIsEncode_ObjectPartial =
    _test_protobuf_isEncode("ObjectPartial")<ObjectPartial>(ObjectPartial)({
        encode: typia.protobuf.createIsEncode<ObjectPartial>(),
        decode: typia.protobuf.createDecode<ObjectPartial>(),
        message: typia.protobuf.message<ObjectPartial>(),
    });
