import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { TagPattern } from "../../../structures/TagPattern";
export const test_createClone_TagPattern = _test_clone("TagPattern", TagPattern.generate, (input: TagPattern): typia.Primitive<TagPattern> => {
    const $co0 = (input: any): any => ({
        uuid: input.uuid as any,
        email: input.email as any,
        ipv4: input.ipv4 as any,
        ipv6: input.ipv6 as any
    });
    return "object" === typeof input && null !== input ? $co0(input) : input as any;
});
