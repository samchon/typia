import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_json_createAssertStringify_ObjectUnionExplicitPointer =
  _test_json_assertStringify(
    "ObjectUnionExplicitPointer",
  )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)(
    typia.json.createAssertStringify<ObjectUnionExplicitPointer>(),
  );
