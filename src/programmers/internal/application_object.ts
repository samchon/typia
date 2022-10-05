import { MetadataObject } from "../../metadata/MetadataObject";
import { IJsonComponents } from "../../schemas/IJsonComponents";

import { ApplicationProgrammer } from "../ApplicationProgrammer";
import { application_schema } from "./application_schema";
import { metadata_to_pattern } from "./metadata_to_pattern";

/**
 * @internal
 */
export const application_object =
    (options: ApplicationProgrammer.IOptions) =>
    (components: IJsonComponents) =>
    (key: string, obj: MetadataObject, nullable: boolean): void => {
        // TEMPORARY ASSIGNMENT
        if (components.schemas[key] !== undefined) return;
        components.schemas[key] = {} as any;

        // ITERATE PROPERTIES
        const properties: Record<string, any> = {};
        const patternProperties: Record<string, any> = {};
        const required: string[] = [];

        for (const property of obj.properties) {
            if (
                property.value.functional === true &&
                property.value.nullable === false &&
                property.value.required === true &&
                property.value.size() === 0
            )
                continue;

            const key: string | null = property.key.getSoleLiteral();
            const value = () =>
                application_schema(options)(components)(property.value, {
                    description: property.description,
                    metaTags: property.tags.length ? property.tags : undefined,
                    jsDocTags: property.jsDocTags.length
                        ? property.jsDocTags
                        : undefined,
                });

            if (key !== null) {
                properties[key] = value();
                if (property.value.required === true) required.push(key);
            } else {
                const pattern: string = metadata_to_pattern(true)(property.key);
                patternProperties[pattern] = value();
            }
        }

        const schema: IJsonComponents.IObject = {
            $id:
                options.purpose === "ajv"
                    ? options.prefix + "/" + key
                    : undefined,
            $recursiveAnchor:
                (options.purpose === "ajv" && obj.recursive) || undefined,
            type: "object",
            properties,
            patternProperties: Object.keys(patternProperties).length
                ? patternProperties
                : undefined,
            nullable,
            required: required.length ? required : undefined,
            description: obj.description,
            jsDocTags: obj.jsDocTags,
        };
        components.schemas[key] = schema;
    };
