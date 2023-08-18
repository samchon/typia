import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_protobuf_validateEncode_ClassGetter =
    _test_protobuf_validateEncode<ClassGetter>(ClassGetter)({
        validateEncode: typia.protobuf.createValidateEncode<ClassGetter>(),
        message: typia.protobuf.message<ClassGetter>(),
    });
