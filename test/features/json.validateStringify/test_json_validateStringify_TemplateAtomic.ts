import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_json_validateStringify_TemplateAtomic =
    _test_json_validateStringify(
        "TemplateAtomic",
        TemplateAtomic.generate,
        (input) => typia.json.validateStringify(input),
        TemplateAtomic.SPOILERS,
    );
