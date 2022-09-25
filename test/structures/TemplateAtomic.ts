import { RandomGenerator } from "../internal/RandomGenerator";

export interface TemplateAtomic {
    prefix: `prefix_${string}`;
    postfix: `${string}_postfix`;
    middle_string: `the_${string}_value`;
    middle_string_empty: `the_${string}_value`;
    middle_numeric: `the_${number}_value`;
    middle_boolean: `the_${boolean}_value`;
    ipv4: `${number}.${number}.${number}.${number}`;
    email: `${string}@${string}.${string}`;
}
export namespace TemplateAtomic {
    export function generate(): TemplateAtomic {
        return {
            prefix: `prefix_${RandomGenerator.string()}`,
            postfix: `${RandomGenerator.string()}_postfix`,
            middle_string: `the_${RandomGenerator.string()}_value`,
            middle_string_empty: `the__value`,
            middle_numeric: `the_${Math.random() * 100}_value`,
            middle_boolean: `the_${Math.random() > 0.5}_value`,
            ipv4: `127.0.0.1`,
            email: "samchon@github.com",
        };
    }
}
