import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ArraySimplePointer } from "../../structures/ArraySimplePointer";

export const test_protobuf_validateEncode_ArraySimplePointer =
    _test_protobuf_validateEncode<ArraySimplePointer>(ArraySimplePointer)({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<ArraySimplePointer>(input),
        message: typia.protobuf.message<ArraySimplePointer>(),
    });
