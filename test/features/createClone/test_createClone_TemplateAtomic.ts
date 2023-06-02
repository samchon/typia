import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_createClone_TemplateAtomic = _test_clone(
    "TemplateAtomic",
    TemplateAtomic.generate,
    typia.createClone<TemplateAtomic>(),
);
