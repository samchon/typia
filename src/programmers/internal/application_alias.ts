import { CommentFactory } from "../../factories/CommentFactory";

import { IJsDocTagInfo } from "../../metadata/IJsDocTagInfo";
import { MetadataAlias } from "../../metadata/MetadataAlias";
import { IJsonComponents } from "../../schemas/IJsonComponents";

import { IJsonSchema } from "../../module";
import { ApplicationProgrammer } from "../ApplicationProgrammer";
import { JSON_COMPONENTS_PREFIX } from "./JSON_SCHEMA_PREFIX";
import { application_object } from "./application_object";
import { application_schema } from "./application_schema";

export const application_alias =
    (options: ApplicationProgrammer.IOptions) =>
    <BlockNever extends boolean>(blockNever: BlockNever) =>
    (components: IJsonComponents) =>
    (alias: MetadataAlias) =>
    (nullable: boolean): IJsonSchema.IReference => {
        if (alias.value.size() === 1 && alias.value.objects.length === 1)
            return application_object(options)(components)(
                alias.value.objects[0]!,
            )(nullable);

        const key: string =
            options.purpose === "ajv"
                ? alias.name
                : `${alias.name}${nullable ? ".Nullable" : ""}`;
        const $id: string = `${JSON_COMPONENTS_PREFIX}/schemas/${key}`;

        // TEMPORARY ASSIGNMENT
        if (components.schemas?.[key] === undefined) {
            components.schemas ??= {};
            components.schemas[key] = {
                $id: key,
            } as any;

            // GENERATE SCHEM
            const schema: IJsonSchema = application_schema(options)(blockNever)(
                components,
            )(alias.value)({
                deprecated:
                    alias.jsDocTags.some((tag) => tag.name === "deprecated") ||
                    undefined,
                title: (() => {
                    const info: IJsDocTagInfo | undefined =
                        alias.jsDocTags.find((tag) => tag.name === "title");
                    return info?.text?.length
                        ? CommentFactory.merge(info.text)
                        : undefined;
                })(),
                description: alias.description ?? undefined,
                "x-typia-metaTags": alias.tags.length ? alias.tags : undefined,
                "x-typia-jsDocTags": alias.jsDocTags.length
                    ? alias.jsDocTags
                    : undefined,
            })!;
            components.schemas ??= {};
            components.schemas[key] = {
                $id: options.purpose === "ajv" ? $id : undefined,
                $recursiveAnchor:
                    (options.purpose === "ajv" && alias.recursive) || undefined,
                ...schema,
            };
        }
        return { $ref: $id };
    };
