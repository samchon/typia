import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_protobuf_isEncode_ObjectHttpArray = _test_protobuf_isEncode(
    "ObjectHttpArray",
)<ObjectHttpArray>(ObjectHttpArray)({
    isEncode: (input) => typia.protobuf.isEncode<ObjectHttpArray>(input),
    message: typia.protobuf.message<ObjectHttpArray>(),
    decode: typia.protobuf.createDecode<ObjectHttpArray>(),
});
