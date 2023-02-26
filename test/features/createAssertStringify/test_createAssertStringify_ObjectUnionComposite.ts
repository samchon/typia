import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_createAssertStringify_ObjectUnionComposite =
    _test_assertStringify(
        "ObjectUnionComposite",
        ObjectUnionComposite.generate,
        typia.createAssertStringify<ObjectUnionComposite>(),
        ObjectUnionComposite.SPOILERS,
    );
