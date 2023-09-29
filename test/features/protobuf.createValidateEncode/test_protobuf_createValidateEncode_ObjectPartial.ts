import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_protobuf_createValidateEncode_ObjectPartial =
    _test_protobuf_validateEncode("ObjectPartial")<ObjectPartial>(
        ObjectPartial,
    )({
        validateEncode: typia.protobuf.createValidateEncode<ObjectPartial>(),
        message: typia.protobuf.message<ObjectPartial>(),
        decode: typia.protobuf.createDecode<ObjectPartial>(),
    });
