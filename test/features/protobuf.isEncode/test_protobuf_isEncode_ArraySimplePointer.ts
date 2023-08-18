import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ArraySimplePointer } from "../../structures/ArraySimplePointer";

export const test_protobuf_isEncode_ArraySimplePointer =
    _test_protobuf_isEncode<ArraySimplePointer>(ArraySimplePointer)({
        isEncode: (input) => typia.protobuf.isEncode<ArraySimplePointer>(input),
        message: typia.protobuf.message<ArraySimplePointer>(),
    });
