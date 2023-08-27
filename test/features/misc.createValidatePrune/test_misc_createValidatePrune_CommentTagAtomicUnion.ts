import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_misc_validatePrune_CommentTagAtomicUnion =
    _test_misc_validatePrune("CommentTagAtomicUnion")<CommentTagAtomicUnion>(
        CommentTagAtomicUnion,
    )(typia.misc.createValidatePrune<CommentTagAtomicUnion>());
