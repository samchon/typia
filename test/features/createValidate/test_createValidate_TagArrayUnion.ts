import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { TagArrayUnion } from "../../structures/TagArrayUnion";

export const test_validate_TagArrayUnion = _test_validate<TagArrayUnion>(
    TagArrayUnion,
)(typia.createValidate<TagArrayUnion>());
