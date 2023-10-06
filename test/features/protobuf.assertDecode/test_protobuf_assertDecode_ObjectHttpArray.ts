import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_protobuf_createAssertDecode_ObjectHttpArray =
    _test_protobuf_assertDecode("ObjectHttpArray")<ObjectHttpArray>(
        ObjectHttpArray,
    )({
        decode: (input) => typia.protobuf.assertDecode<ObjectHttpArray>(input),
        encode: typia.protobuf.createEncode<ObjectHttpArray>(),
    });
