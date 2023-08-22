import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_protobuf_isEncode_ObjectSimple = _test_protobuf_isEncode(
    "ObjectSimple",
)<ObjectSimple>(ObjectSimple)({
    isEncode: typia.protobuf.createIsEncode<ObjectSimple>(),
    message: typia.protobuf.message<ObjectSimple>(),
    decode: typia.protobuf.createDecode<ObjectSimple>(),
});
