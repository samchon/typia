import typia from "../../../src";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_json_createValidateParse_ObjectUnionComposite = _test_json_validateParse(
    "ObjectUnionComposite",
)<ObjectUnionComposite>(
    ObjectUnionComposite
)(typia.json.createValidateParse<ObjectUnionComposite>());
