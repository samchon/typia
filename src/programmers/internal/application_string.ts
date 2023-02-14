import { Metadata } from "../../metadata/Metadata";
import { IJsonSchema } from "../../schemas/IJsonSchema";

import { application_default_string } from "./application_default_string";

/**
 * @internal
 */
export const application_string = (
    meta: Metadata,
    attribute: IJsonSchema.IAttribute,
): IJsonSchema.IString => {
    const output: IJsonSchema.IString = {
        type: "string",
        nullable: meta.nullable,
        ...attribute,
    };

    // FORMAT TAG OF METADATA
    const formatJsdocTag = attribute["x-typia-jsDocTags"]?.find(
        (tag) => tag.name === "format",
    );
    if (formatJsdocTag?.text?.length)
        output.format = formatJsdocTag?.text.map((t) => t.text).join(" ");

    // REGULAR TAGS COMPATIBLE WITH JSON-SCHEMA
    for (const tag of attribute["x-typia-metaTags"] || []) {
        // RANGE
        if (tag.kind === "minLength") output.minLength = tag.value;
        else if (tag.kind === "maxLength") output.maxLength = tag.value;
        // FORMAT AND PATTERN
        else if (tag.kind === "format") output.format = tag.value;
        else if (tag.kind === "pattern") output.pattern = tag.value;
    }

    // DEFAULT CONFIGURATION
    output.default = application_default_string(meta, attribute)(output);

    // RETURNS
    return output;
};
