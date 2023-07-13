import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_json_assertStringify_ObjectUnionDouble =
    _test_json_assertStringify(
        "ObjectUnionDouble",
        ObjectUnionDouble.generate,
        typia.json.createAssertStringify<ObjectUnionDouble>(),
        ObjectUnionDouble.SPOILERS,
    );
