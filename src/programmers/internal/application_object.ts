import { CommentFactory } from "../../factories/CommentFactory";

import { IJsDocTagInfo } from "../../metadata/IJsDocTagInfo";
import { MetadataObject } from "../../metadata/MetadataObject";
import { IJsonComponents } from "../../schemas/IJsonComponents";

import { PatternUtil } from "../../utils/PatternUtil";

import { IJsonSchema } from "../../module";
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
        const additionalProperties: IJsonSchema[] = [];
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
            const value: IJsonSchema | null = application_schema(options)(
                components,
            )(true)(property.value, {
                deprecated:
                    !!property.jsDocTags.find(
                        (tag) => tag.name === "deprecated",
                    ) || undefined,
                title: (() => {
                    const info: IJsDocTagInfo | undefined =
                        property.jsDocTags.find((tag) => tag.name === "title");
                    return info?.text?.length
                        ? CommentFactory.generate(info.text)
                        : undefined;
                })(),
                description: property.description,
                "x-tson-metaTags": property.tags.length
                    ? property.tags
                    : undefined,
                "x-tson-jsDocTags": property.jsDocTags.length
                    ? property.jsDocTags
                    : undefined,
            });

            if (value === null) continue;
            else if (key !== null) {
                properties[key] = value;
                if (property.value.required === true) required.push(key);
            } else {
                const pattern: string = metadata_to_pattern(true)(property.key);
                if (
                    options.purpose === "swagger" ||
                    pattern === PatternUtil.STRING
                )
                    additionalProperties.push(value);
                else patternProperties[pattern] = value;
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
            additionalProperties: additionalProperties.length
                ? additionalProperties.length === 1
                    ? additionalProperties[0]
                    : { oneOf: additionalProperties }
                : undefined,
            nullable,
            required: required.length ? required : undefined,
            description: obj.description,
            "x-tson_jsDocTags": obj.jsDocTags,
        };
        components.schemas[key] = schema;
    };
