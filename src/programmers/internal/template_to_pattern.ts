import { Metadata } from "../../metadata/Metadata";

import { ArrayUtil } from "../../utils/ArrayUtil";

/**
 * @internal
 */
export const template_to_pattern = (template: Metadata[]) =>
    template
        .map((meta) => {
            if (meta.atomics.find((type) => type === "string") !== undefined)
                return "(.*)";

            const values: string[] = ArrayUtil.flat(
                meta.constants.map((c) => {
                    if (c.type !== "string")
                        return c.values.map((v) => v.toString());
                    return c.values.map((str) => escape(str));
                }),
            );
            for (const type of meta.atomics)
                if (type === "number" || type === "bigint")
                    values.push("\\d+(\\.\\d+)?");
                else if (type === "boolean") values.push("true|false");
            for (const childTpl of meta.templates)
                values.push("(" + template_to_pattern(childTpl) + ")");
            return "(" + values.join("|") + ")";
        })
        .join("");

const escape = (str: string) =>
    str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
