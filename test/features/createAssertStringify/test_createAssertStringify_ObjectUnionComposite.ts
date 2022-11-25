import TSON from "../../../src";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_ObjectUnionComposite =
    _test_assertStringify(
        "ObjectUnionComposite",
        ObjectUnionComposite.generate,
        TSON.createAssertStringify<ObjectUnionComposite>(),
        ObjectUnionComposite.SPOILERS,
    );
