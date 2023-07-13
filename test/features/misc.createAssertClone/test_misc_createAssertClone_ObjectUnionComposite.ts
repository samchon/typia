import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_misc_assertClone_ObjectUnionComposite =
    _test_misc_assertClone(
        "ObjectUnionComposite",
        ObjectUnionComposite.generate,
        typia.misc.createAssertClone<ObjectUnionComposite>(),
        ObjectUnionComposite.SPOILERS,
    );
