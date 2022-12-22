import { IJsonSchema } from "../../schemas/IJsonSchema";

/**
 * @internal
 */
export const application_default =
    (attribute: IJsonSchema.IAttribute) =>
    (pred: (value: string) => boolean) =>
    <T>(caster: (str: string) => T): T | undefined => {
        const defaults = (attribute["x-typia-jsDocTags"] || []).filter(
            (tag) => tag.name === "default",
        );
        for (const def of defaults)
            if (def.text?.length && pred(def.text[0]!.text))
                return caster(def.text[0]!.text);
        return undefined;
    };
