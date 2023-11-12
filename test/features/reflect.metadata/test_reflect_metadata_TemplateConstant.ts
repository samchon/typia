import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_reflect_metadata_TemplateConstant = _test_reflect_metadata(
    "TemplateConstant",
)(typia.reflect.metadata<[TemplateConstant]>());
