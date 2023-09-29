import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_protobuf_isEncode_ObjectPartial = _test_protobuf_isEncode(
    "ObjectPartial",
)<ObjectPartial>(ObjectPartial)({
    isEncode: (input) => typia.protobuf.isEncode<ObjectPartial>(input),
    message: typia.protobuf.message<ObjectPartial>(),
    decode: typia.protobuf.createDecode<ObjectPartial>(),
});
