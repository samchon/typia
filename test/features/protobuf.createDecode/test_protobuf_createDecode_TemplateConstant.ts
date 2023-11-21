import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_protobuf_createDecode_TemplateConstant =
  _test_protobuf_decode("TemplateConstant")<TemplateConstant>(TemplateConstant)(
    {
      decode: typia.protobuf.createDecode<TemplateConstant>(),
      encode: typia.protobuf.createEncode<TemplateConstant>(),
    },
  );
