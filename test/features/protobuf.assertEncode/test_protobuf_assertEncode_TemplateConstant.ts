import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_protobuf_createAssertEncode_TemplateConstant =
  _test_protobuf_assertEncode("TemplateConstant")<TemplateConstant>(
    TemplateConstant,
  )({
    encode: (input) => typia.protobuf.assertEncode<TemplateConstant>(input),
    decode: typia.protobuf.createDecode<TemplateConstant>(),
    message: typia.protobuf.message<TemplateConstant>(),
  });
