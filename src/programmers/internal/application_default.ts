import { IJsonSchema } from "../../schemas/json/IJsonSchema";

/**
 * @internal
 */
export const application_default =
    (attribute: IJsonSchema.IAttribute) =>
    (pred: (value: string) => boolean) =>
    <T>(caster: (str: string) => T): T | undefined => {
        const defaults = (attribute["x-typia-jsDocTags"] ?? []).filter(
            (tag) => tag.name === "default",
        );
        for (const alias of defaults)
            if (alias.text?.length && pred(alias.text[0]!.text))
                return caster(alias.text[0]!.text);
        return undefined;
    };
