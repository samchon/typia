import typia from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_clone } from "../internal/_test_clone";
export const test_clone_TagPattern = _test_clone("TagPattern", TagPattern.generate, (input) => ((input: TagPattern): typia.Primitive<TagPattern> => {
    const $co0 = (input: any) => ({
        uuid: input.uuid,
        email: input.email,
        url: input.url,
        ipv4: input.ipv4,
        ipv6: input.ipv6
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
})(input));
