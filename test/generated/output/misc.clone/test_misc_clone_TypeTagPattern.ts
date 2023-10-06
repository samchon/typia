import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { TypeTagPattern } from "../../../structures/TypeTagPattern";

export const test_misc_clone_TypeTagPattern = _test_misc_clone(
    "TypeTagPattern",
)<TypeTagPattern>(TypeTagPattern)((input) =>
    ((input: TypeTagPattern): typia.Resolved<TypeTagPattern> => {
        const $co0 = (input: any): any => ({
            uuid: input.uuid as any,
            email: input.email as any,
            ipv4: input.ipv4 as any,
            ipv6: input.ipv6 as any,
        });
        return "object" === typeof input && null !== input
            ? $co0(input)
            : (input as any);
    })(input),
);
