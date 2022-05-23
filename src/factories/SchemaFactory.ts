import { IJsonComponents } from "../structures/IJsonComponents";
import { IJsonSchema } from "../structures/IJsonSchema";
import { IJsonApplication } from "../structures/IJsonApplication";
import { IMetadata } from "../structures/IMetadata";

export namespace SchemaFactory
{
    export function application(app: IMetadata.IApplication | null): IJsonApplication
    {
        return {
            schema: schema(app?.metadata || null), 
            components: components(app?.storage || null)
        };
    }

    /* -----------------------------------------------------------
        SCHEMA
    ----------------------------------------------------------- */
    export function schema(meta: IMetadata | null): IJsonSchema
    {
        if (meta === null)
            return {};
        
        const unions: IJsonSchema[] = [];
        for (const type of meta.atomics)
            unions.push(generate_atomic(type as "boolean", meta.nullable, meta.description));
        for (const address of meta.objects.values())
            unions.push(generate_pointer(address, meta.description));
        for (const schema of meta.arraies.values())
            unions.push(generate_array(schema, meta.nullable, meta.description));

        if (unions.length === 0)
            return {};
        else if (unions.length === 1)
            return unions[0]!;
        else
            return {
                oneOf: unions
            };
    }

    function generate_atomic
        (
            type: "boolean"|"number"|"bigint"|"string", 
            nullable: boolean,
            description: string | undefined
        )
    {
        return {
            type,
            nullable,
            description
        };
    }

    function generate_pointer
        (
            $ref: string, 
            description: string | undefined
        ): IJsonSchema.IPointer
    {
        return {
            $ref,
            description
        };
    }

    function generate_array
        (
            metadata: IMetadata | null, 
            nullable: boolean,
            description: string | undefined
        ): IJsonSchema.IArray
    {
        return {
            type: "array",
            items: schema(metadata),
            nullable,
            description
        };
    }

    /* -----------------------------------------------------------
        COMPONENTS
    ----------------------------------------------------------- */
    export function components(storage: IMetadata.IStorage | null): IJsonComponents
    {
        const schemas: Record<string, any> = {};
        for (const [key, value] of Object.entries(storage || []))
            schemas[key] = generate_object(value);

        return { schemas };
    }

    function generate_object(obj: IMetadata.IObject): IJsonComponents.IObject
    {
        const properties: Record<string, any> = {};
        const required: string[] = [];

        for (const [key, value] of Object.entries(obj.properties || []))
        {
            properties[key] = schema(value);
            if (value?.required === true)
                required.push(key);
        }
        return {
            $id: obj.$id,
            type: "object",
            properties,
            nullable: obj.nullable,
            required,
            description: obj.description
        };
    }
}