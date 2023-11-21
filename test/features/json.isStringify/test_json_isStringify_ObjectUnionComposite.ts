import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_json_isStringify_ObjectUnionComposite =
  _test_json_isStringify("ObjectUnionComposite")<ObjectUnionComposite>(
    ObjectUnionComposite,
  )((input) => typia.json.isStringify<ObjectUnionComposite>(input));
