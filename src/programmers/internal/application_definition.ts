import { MetadataDefinition } from "../../metadata/MetadataDefinition";
import { IJsonComponents } from "../../schemas/IJsonComponents";

import { IJsonSchema } from "../../module";
import { ApplicationProgrammer } from "../ApplicationProgrammer";
import { JSON_COMPONENTS_PREFIX } from "./JSON_SCHEMA_PREFIX";
import { application_schema } from "./application_schema";

export const application_definition =
    (options: ApplicationProgrammer.IOptions) =>
    <BlockNever extends boolean>(blockNever: BlockNever) =>
    (components: IJsonComponents) =>
    (def: MetadataDefinition) =>
    (
        nullable: boolean,
    ): IJsonSchema.IReference | IJsonSchema.IRecursiveReference => {
        const key: string =
            options.purpose === "ajv"
                ? def.name
                : `${def.name}${nullable ? ".Nullable" : ""}`;
        const $id: string = `${JSON_COMPONENTS_PREFIX}/definitions/${key}`;

        // TEMPORARY ASSIGNMENT
        if (components.definitions?.[key] === undefined) {
            components.definitions[key] = {
                $id: key,
            } as any;

            // GENERATE SCHEM
            const schema: IJsonSchema = application_schema(options)(blockNever)(
                components,
            )(def.value)({})!;
            components.definitions ??= {};
            components.definitions[key] = {
                $id: options.purpose === "ajv" ? $id : undefined,
                $recursiveAnchor:
                    (options.purpose === "ajv" && def.recursive) || undefined,
                ...schema,
            };
        }
        return options.purpose === "ajv" && def.recursive
            ? { $recursiveRef: $id }
            : { $ref: $id };
    };
