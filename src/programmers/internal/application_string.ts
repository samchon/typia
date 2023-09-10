import { IJsonSchema } from "../../schemas/json/IJsonSchema";
import { IMetadataTypeTag } from "../../schemas/metadata/IMetadataTypeTag";
import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataAtomic } from "../../schemas/metadata/MetadataAtomic";

import { application_default_string } from "./application_default_string";

/**
 * @internal
 */
export const application_string =
    (meta: Metadata) =>
    (atomic: MetadataAtomic) =>
    (attribute: IJsonSchema.IAttribute): IJsonSchema.IString[] => {
        // DEFAULT CONFIGURATION
        const base: IJsonSchema.IString = {
            ...attribute,
            type: "string",
        };
        const out = (schema: IJsonSchema.IString) => {
            schema.default = application_default_string(meta)(attribute)(base);
            return schema;
        };
        if (atomic.tags.length === 0) return [out(base)];

        // CONSIDER TYPE TAGS
        const union: IJsonSchema.IString[] = atomic.tags.map(
            (row) => application_string_tags({ ...base })(row)!,
        );
        const map: Map<string, IJsonSchema.IString> = new Map(
            union.map((u) => [JSON.stringify(u), u]),
        );
        return [...map.values()].map((s) => out(s));
    };

const application_string_tags =
    (base: IJsonSchema.IString) =>
    (row: IMetadataTypeTag[]): IJsonSchema.IString | null => {
        for (const tag of row
            .slice()
            .sort((a, b) => a.kind.localeCompare(b.kind)))
            if (tag.kind === "minLength" && typeof tag.value === "number")
                base.minLength = tag.value;
            else if (tag.kind === "maxLength" && typeof tag.value === "number")
                base.maxLength = tag.value;
            else if (tag.kind === "format" && typeof tag.value === "string")
                base.format = tag.value;
            else if (tag.kind === "pattern") base.pattern = tag.value;
        base["x-typia-typeTags"] = row;
        return base;
    };
