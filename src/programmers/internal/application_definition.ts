import { MetadataAlias } from "../../metadata/MetadataAlias";
import { IJsonComponents } from "../../schemas/IJsonComponents";

import { IJsonSchema } from "../../module";
import { ApplicationProgrammer } from "../ApplicationProgrammer";
import { JSON_COMPONENTS_PREFIX } from "./JSON_SCHEMA_PREFIX";
import { application_schema } from "./application_schema";

export const application_alias =
    (options: ApplicationProgrammer.IOptions) =>
    <BlockNever extends boolean>(blockNever: BlockNever) =>
    (components: IJsonComponents) =>
    (alias: MetadataAlias) =>
    (
        nullable: boolean,
    ): IJsonSchema.IReference | IJsonSchema.IRecursiveReference => {
        const key: string =
            options.purpose === "ajv"
                ? alias.name
                : `${alias.name}${nullable ? ".Nullable" : ""}`;
        const $id: string = `${JSON_COMPONENTS_PREFIX}/aliases/${key}`;

        // TEMPORARY ASSIGNMENT
        if (components.schemas?.[key] === undefined) {
            components.schemas ??= {};
            components.schemas[key] = {
                $id: key,
            } as any;

            // GENERATE SCHEM
            const schema: IJsonSchema = application_schema(options)(blockNever)(
                components,
            )(alias.value)({})!;
            components.schemas ??= {};
            components.schemas[key] = {
                $id: options.purpose === "ajv" ? $id : undefined,
                $recursiveAnchor:
                    (options.purpose === "ajv" && alias.recursive) || undefined,
                ...schema,
            };
        }
        return options.purpose === "ajv" && alias.recursive
            ? { $recursiveRef: $id }
            : { $ref: $id };
    };
