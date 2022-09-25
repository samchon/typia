export interface TemplateConstant {
    prefix: `prefix_${"A" | "B" | "C"}`;
    postfix: `${1 | 2 | 3}_postfix`;
    combined: `the_${1 | 2 | 3}_value_with_label_${"A" | "B" | "C"}`;
}
export namespace TemplateConstant {
    export function generate(): TemplateConstant[] {
        const output: TemplateConstant[] = [];
        for (const prefix of ALPHABETS)
            for (const postfix of NUMBERS)
                for (const c1 of NUMBERS)
                    for (const c2 of ALPHABETS)
                        output.push({
                            prefix: `prefix_${prefix}`,
                            postfix: `${postfix}_postfix`,
                            combined: `the_${c1}_value_with_label_${c2}`,
                        });
        return output;
    }
}

const ALPHABETS = ["A", "B", "C"] as const;
const NUMBERS = [1, 2, 3] as const;
