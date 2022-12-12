import typia from "../../../src";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_ObjectUnionComposite = _test_validateEquals(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    (input) => typia.validateEquals(input),
);
