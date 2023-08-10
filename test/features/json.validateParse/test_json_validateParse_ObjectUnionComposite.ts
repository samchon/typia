import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_json_validateParse_ObjectUnionComposite =
    _test_json_validateParse<ObjectUnionComposite>(ObjectUnionComposite)(
        (input) => typia.json.validateParse<ObjectUnionComposite>(input),
    );
