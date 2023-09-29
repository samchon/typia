import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_protobuf_isEncode_ObjectRequired = _test_protobuf_isEncode(
    "ObjectRequired",
)<ObjectRequired>(ObjectRequired)({
    isEncode: (input) => typia.protobuf.isEncode<ObjectRequired>(input),
    message: typia.protobuf.message<ObjectRequired>(),
    decode: typia.protobuf.createDecode<ObjectRequired>(),
});
