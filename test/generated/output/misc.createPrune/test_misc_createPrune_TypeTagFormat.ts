import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { TypeTagFormat } from "../../../structures/TypeTagFormat";

export const test_misc_createPrune_TypeTagFormat = _test_misc_prune(
    "TypeTagFormat",
)<TypeTagFormat>(TypeTagFormat)((input: TypeTagFormat): void => {
    const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if (
                "uuid" === key ||
                "email" === key ||
                "url" === key ||
                "ipv4" === key ||
                "ipv6" === key ||
                "date" === key ||
                "date_time" === key
            )
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input) $po0(input);
});
