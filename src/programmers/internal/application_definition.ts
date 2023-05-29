import { MetadataDefinition } from "../../metadata/MetadataDefinition";
import { IJsonComponents } from "../../schemas/IJsonComponents";

import { ApplicationProgrammer } from "../ApplicationProgrammer";
import { JSON_COMPONENTS_PREFIX } from "./JSON_SCHEMA_PREFIX";
import { application_schema } from "./application_schema";

export const application_definition =
    (options: ApplicationProgrammer.IOptions) =>
    <BlockNever extends boolean>(blockNever: BlockNever) =>
    (components: IJsonComponents) =>
    (def: MetadataDefinition) =>
    (nullable: boolean): string => {
        const key =
            options.purpose === "ajv"
                ? def.name
                : `${def.name}${nullable ? ".Nullable" : ""}`;

        // TEMPORARY ASSIGNMENT
        if (components.definitions[key] !== undefined) return key;
        components.definitions[key] = {
            $id: key,
        } as any;

        // GENERATE SCHEM
        const schema = application_schema(options)(blockNever)(components)(
            def.value,
        )({});
        components.definitions[key] = {
            $id:
                options.purpose === "ajv"
                    ? `${JSON_COMPONENTS_PREFIX}/definitions/${key}`
                    : undefined,
            ...schema,
        };
        return key;
    };
