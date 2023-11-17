import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_protobuf_createAssertDecode_ObjectGenericAlias =
  _test_protobuf_assertDecode("ObjectGenericAlias")<ObjectGenericAlias>(
    ObjectGenericAlias,
  )({
    decode: (input) => typia.protobuf.assertDecode<ObjectGenericAlias>(input),
    encode: typia.protobuf.createEncode<ObjectGenericAlias>(),
  });
