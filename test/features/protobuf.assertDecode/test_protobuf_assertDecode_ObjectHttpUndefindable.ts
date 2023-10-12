import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_protobuf_createAssertDecode_ObjectHttpUndefindable =
    _test_protobuf_assertDecode(
        "ObjectHttpUndefindable",
    )<ObjectHttpUndefindable>(ObjectHttpUndefindable)({
        decode: (input) =>
            typia.protobuf.assertDecode<ObjectHttpUndefindable>(input),
        encode: typia.protobuf.createEncode<ObjectHttpUndefindable>(),
    });
