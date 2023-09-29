import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_protobuf_validateEncode_ObjectPartial =
    _test_protobuf_validateEncode("ObjectPartial")<ObjectPartial>(
        ObjectPartial,
    )({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<ObjectPartial>(input),
        message: typia.protobuf.message<ObjectPartial>(),
        decode: typia.protobuf.createDecode<ObjectPartial>(),
    });
