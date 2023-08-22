import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_protobuf_isEncode_ObjectOptional = _test_protobuf_isEncode(
    "ObjectOptional",
)<ObjectOptional>(ObjectOptional)({
    isEncode: typia.protobuf.createIsEncode<ObjectOptional>(),
    message: typia.protobuf.message<ObjectOptional>(),
    decode: typia.protobuf.createDecode<ObjectOptional>(),
});
