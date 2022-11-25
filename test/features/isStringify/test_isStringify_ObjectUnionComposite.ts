import TSON from "../../../src";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_ObjectUnionComposite = _test_isStringify(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    (input) => TSON.isStringify(input),
    ObjectUnionComposite.SPOILERS,
);