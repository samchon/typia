import TSON from "../../../src";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_ObjectUnionExplicit =
    _test_assertStringify(
        "ObjectUnionExplicit",
        ObjectUnionExplicit.generate,
        TSON.createAssertStringify<ObjectUnionExplicit>(),
        ObjectUnionExplicit.SPOILERS,
    );
