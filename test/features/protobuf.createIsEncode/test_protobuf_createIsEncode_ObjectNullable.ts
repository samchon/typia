import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_protobuf_isEncode_ObjectNullable = _test_protobuf_isEncode(
    "ObjectNullable",
)<ObjectNullable>(ObjectNullable)({
    isEncode: typia.protobuf.createIsEncode<ObjectNullable>(),
    message: typia.protobuf.message<ObjectNullable>(),
    decode: typia.protobuf.createDecode<ObjectNullable>(),
});
