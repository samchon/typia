import { CommentFactory } from "../../factories/CommentFactory";

import { IJsonComponents } from "../../schemas/json/IJsonComponents";
import { IJsDocTagInfo } from "../../schemas/metadata/IJsDocTagInfo";
import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataObject } from "../../schemas/metadata/MetadataObject";

import { PatternUtil } from "../../utils/PatternUtil";

import { IJsonSchema } from "../../module";
import { JsonApplicationProgrammer } from "../json/JsonApplicationProgrammer";
import { JSON_COMPONENTS_PREFIX } from "./JSON_SCHEMA_PREFIX";
import { application_schema } from "./application_schema";
import { metadata_to_pattern } from "./metadata_to_pattern";

/**
 * @internal
 */
export const application_object =
    (options: JsonApplicationProgrammer.IOptions) =>
    (components: IJsonComponents) =>
    (obj: MetadataObject) =>
    (nullable: boolean): IJsonSchema.IReference => {
        const key: string =
            options.purpose === "ajv"
                ? obj.name
                : `${obj.name}${nullable ? ".Nullable" : ""}`;
        const $id: string = `${JSON_COMPONENTS_PREFIX}/schemas/${key}`;
        const output = { $ref: $id };

        // TEMPORARY ASSIGNMENT
        if (components.schemas?.[key] !== undefined) return output;
        components.schemas ??= {};
        components.schemas[key] = {} as any;

        // ITERATE PROPERTIES
        const properties: Record<string, any> = {};
        const extraMeta: ISuperfluous = {
            patternProperties: {},
            additionalProperties: undefined,
        };
        const required: string[] = [];

        for (const property of obj.properties) {
            if (
                // FUNCTIONAL TYPE
                property.value.functional === true &&
                property.value.nullable === false &&
                property.value.isRequired() === true &&
                property.value.size() === 0
            )
                continue;
            else if (property.jsDocTags.find((tag) => tag.name === "hidden"))
                continue; // THE HIDDEN TAG

            const key: string | null = property.key.getSoleLiteral();
            const schema: IJsonSchema | null = application_schema(options)(
                true,
            )(components)(property.value)({
                deprecated:
                    property.jsDocTags.some(
                        (tag) => tag.name === "deprecated",
                    ) || undefined,
                title: (() => {
                    const info: IJsDocTagInfo | undefined =
                        property.jsDocTags.find((tag) => tag.name === "title");
                    return info?.text?.length
                        ? CommentFactory.merge(info.text)
                        : undefined;
                })(),
                description: property.description ?? undefined,
                "x-typia-jsDocTags": property.jsDocTags.length
                    ? property.jsDocTags
                    : undefined,
                "x-typia-required": property.value.required,
                "x-typia-optional": property.value.optional,
            });

            if (schema === null) continue;
            else if (key !== null) {
                properties[key] = schema;
                if (property.value.isRequired() === true) required.push(key);
            } else {
                const pattern: string = metadata_to_pattern(true)(property.key);
                if (pattern === PatternUtil.STRING)
                    extraMeta.additionalProperties = [property.value, schema];
                else
                    extraMeta.patternProperties[pattern] = [
                        property.value,
                        schema,
                    ];
            }
        }

        const extraProps = {
            additionalProperties: extraMeta.additionalProperties?.[1],
            patternProperties: (() => {
                if (Object.keys(extraMeta.patternProperties).length === 0)
                    return undefined;
                const output: Record<string, IJsonSchema> = {};
                for (const [key, value] of Object.entries(
                    extraMeta.patternProperties,
                ))
                    output[key] = value[1];
                return output;
            })(),
        };
        const schema: IJsonComponents.IObject = {
            $id: options.purpose === "ajv" ? $id : undefined,
            // $recursiveAnchor:
            //     (options.purpose === "ajv" && obj.recursive) || undefined,
            type: "object",
            properties,
            nullable: options.purpose === "swagger" ? nullable : undefined,
            required: required.length ? required : undefined,
            description: obj.description,
            "x-typia-jsDocTags": obj.jsDocTags,
            ...(options.purpose === "ajv"
                ? extraProps
                : {
                      // swagger can't express patternProperties
                      "x-typia-additionalProperties":
                          extraProps.additionalProperties,
                      "x-typia-patternProperties": extraProps.patternProperties,
                      additionalProperties:
                          join(options)(components)(extraMeta),
                  }),
        };
        components.schemas[key] = schema;
        return output;
    };

const join =
    (options: JsonApplicationProgrammer.IOptions) =>
    (components: IJsonComponents) =>
    (extra: ISuperfluous): IJsonSchema | undefined => {
        // LIST UP METADATA
        const elements: [Metadata, IJsonSchema][] = Object.values(
            extra.patternProperties || {},
        );
        if (extra.additionalProperties)
            elements.push(extra.additionalProperties);

        // SHORT RETURN
        if (elements.length === 0) return undefined;
        else if (elements.length === 1) return elements[0]![1]!;

        // MERGE METADATA AND GENERATE VULNERABLE SCHEMA
        const meta: Metadata = elements
            .map((tuple) => tuple[0])
            .reduce((x, y) => Metadata.merge(x, y));
        return (
            application_schema(options)(true)(components)(meta)({
                "x-typia-required": false,
            }) ?? undefined
        );
    };

interface ISuperfluous {
    additionalProperties?: [Metadata, IJsonSchema];
    patternProperties: Record<string, [Metadata, IJsonSchema]>;
}
