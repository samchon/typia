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
    const formatJsdocTag = attribute["x-tson-jsDocTags"]?.find(
        (tag) => tag.name === "format",
    );
    if (formatJsdocTag?.text?.length)
        output.format = formatJsdocTag?.text.map((t) => t.text).join(" ");

    // REGULAR TAGS COMPATIBLE WITH JSON-SCHEMA
    for (const tag of attribute["x-tson-metaTags"] || []) {
        // RANGE
        if (tag.kind === "minLength") output.minLength = tag.value;
        else if (tag.kind === "maxLength") output.maxLength = tag.value;
        else if (tag.kind === "length") {
            if (tag.minimum !== undefined)
                output.minLength =
                    tag.minimum.value + (tag.minimum.include ? 0 : 1);
            if (tag.maximum !== undefined)
                output.maxLength =
                    tag.maximum.value - (tag.maximum.include ? 0 : 1);
        }
        // FORMAT AND PATTERN
        else if (tag.kind === "format") output.format = tag.value;
        else if (tag.kind === "pattern") output.pattern = tag.value;
    }

    // DEFAULT CONFIGURATION
    output.default = application_default_string(meta, attribute)(output);

    // RETURNS
    return output;
};
