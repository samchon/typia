import TSON from "../../../src";
import { TagMatrix } from "../../structures/TagMatrix";
import { _test_validate_equals } from "../internal/_test_validate_equals";

export const test_create_validate_equals_tag_matrix = _test_validate_equals(
    "matrix tag",
    TagMatrix.generate,
    TSON.createValidateEquals<TagMatrix>(),
);
