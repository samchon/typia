import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ArraySimplePointer } from "../../structures/ArraySimplePointer";

export const test_protobuf_encode_ArraySimplePointer =
    _test_protobuf_encode<ArraySimplePointer>(ArraySimplePointer)({
        encode: (input) => typia.protobuf.encode<ArraySimplePointer>(input),
        message: typia.protobuf.message<ArraySimplePointer>(),
    });
