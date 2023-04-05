import typia from "typia";

import { TagCustom } from "../structures/TagCustom";

const validate = (title: string) => (action?: (custom: TagCustom) => void) => {
    const custom: TagCustom = TagCustom.generate();
    if (action) action(custom);

    try {
        typia.assert(custom);
        console.log("assert:", title, "OK");
    } catch (exp) {
        const guard: typia.TypeGuardError = exp as typia.TypeGuardError;
        console.log("assert:", title, guard.expected);
    }

    const result: typia.IValidation = typia.validate(custom);
    if (result.success) console.log("validate:", title, "OK");
    else
        console.log(
            "validate:",
            title,
            result.errors.map((e) => e.expected),
        );
};

validate("success")();
validate("id")((custom) => (custom.id = "1234"));
validate("dolloar")((custom) => (custom.dollar = "1234"));
validate("postfix")((custom) => (custom.postfix = "abcdabc"));
validate("log")((custom) => (custom.log = 101));

console.log(
    typia
        .metadata<[TagCustom]>()
        .collection[0].properties.map((p) => p.jsDocTags),
);
