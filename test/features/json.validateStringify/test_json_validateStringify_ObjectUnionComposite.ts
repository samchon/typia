import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_json_validateStringify_ObjectUnionComposite =
  _test_json_validateStringify("ObjectUnionComposite")<ObjectUnionComposite>(
    ObjectUnionComposite,
  )((input) => typia.json.validateStringify<ObjectUnionComposite>(input));
