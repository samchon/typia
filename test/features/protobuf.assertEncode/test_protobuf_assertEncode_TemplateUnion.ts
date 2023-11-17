import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_protobuf_createAssertEncode_TemplateUnion =
  _test_protobuf_assertEncode("TemplateUnion")<TemplateUnion>(TemplateUnion)({
    encode: (input) => typia.protobuf.assertEncode<TemplateUnion>(input),
    decode: typia.protobuf.createDecode<TemplateUnion>(),
    message: typia.protobuf.message<TemplateUnion>(),
  });
