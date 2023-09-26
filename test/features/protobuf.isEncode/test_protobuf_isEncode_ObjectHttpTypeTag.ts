import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_protobuf_isEncode_ObjectHttpTypeTag = _test_protobuf_isEncode(
    "ObjectHttpTypeTag",
)<ObjectHttpTypeTag>(ObjectHttpTypeTag)({
    isEncode: (input) => typia.protobuf.isEncode<ObjectHttpTypeTag>(input),
    message: typia.protobuf.message<ObjectHttpTypeTag>(),
    decode: typia.protobuf.createDecode<ObjectHttpTypeTag>(),
});
