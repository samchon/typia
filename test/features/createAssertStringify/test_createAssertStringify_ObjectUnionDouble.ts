import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_createAssertStringify_ObjectUnionDouble =
    _test_assertStringify(
        "ObjectUnionDouble",
        ObjectUnionDouble.generate,
        typia.createAssertStringify<ObjectUnionDouble>(),
        ObjectUnionDouble.SPOILERS,
    );
