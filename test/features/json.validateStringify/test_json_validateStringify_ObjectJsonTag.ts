import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_json_validateStringify_ObjectJsonTag =
    _test_json_validateStringify("ObjectJsonTag")<ObjectJsonTag>(ObjectJsonTag)(
        (input) => typia.json.validateStringify<ObjectJsonTag>(input),
    );
