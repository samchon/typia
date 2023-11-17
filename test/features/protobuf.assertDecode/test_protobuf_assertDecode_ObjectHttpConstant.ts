import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_protobuf_createAssertDecode_ObjectHttpConstant =
  _test_protobuf_assertDecode("ObjectHttpConstant")<ObjectHttpConstant>(
    ObjectHttpConstant,
  )({
    decode: (input) => typia.protobuf.assertDecode<ObjectHttpConstant>(input),
    encode: typia.protobuf.createEncode<ObjectHttpConstant>(),
  });
