import { MetadataObject } from "../../metadata/MetadataObject";
import { IJsonComponents } from "../../schemas/IJsonComponents";

import { ApplicationProgrammer } from "../ApplicationProgrammer";
import { application_schema } from "./application_schema";

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
            if (key === null) continue;

            properties[key] = application_schema(options)(components)(
                property.value,
                {
                    description: property.description,
                    metaTags: property.tags.length ? property.tags : undefined,
                    jsDocTags: property.jsDocTags.length
                        ? property.jsDocTags
                        : undefined,
                },
            );
            if (property.value.required === true) required.push(key);
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
            nullable,
            required: required.length ? required : undefined,
            description: obj.description,
            jsDocTags: obj.jsDocTags,
        };
        components.schemas[key] = schema;
    };
