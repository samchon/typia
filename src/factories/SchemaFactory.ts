import { IMetadata } from "../structures/IMetadata";

export namespace SchemaFactory
{
    export function application(app: IMetadata.IApplication | null)
    {
        return [
            schema(app?.metadata || null), 
            {
                components: components(app?.storage || null)
            }
        ];
    }

    /* -----------------------------------------------------------
        SCHEMA
    ----------------------------------------------------------- */
    export function schema(meta: IMetadata | null): any
    {
        if (meta === null)
            return {};
        
        const unions = [];
        for (const type of meta.atomics)
            unions.push(generate_atomic(type, meta.nullable));
        for (const address of meta.objects.values())
            unions.push(generate_pointer(address));
        for (const schema of meta.arraies.values())
            unions.push(generate_array(schema, meta.nullable));

        if (unions.length === 0)
            return {};
        else if (unions.length === 1)
            return unions[0];
        else
            return {
                oneOf: unions
            };
    }

    function generate_atomic(type: string, nullable: boolean)
    {
        return {
            type,
            nullable,
        };
    }

    function generate_pointer(address: string)
    {
        return {
            $ref: address
        };
    }

    function generate_array(metadata: IMetadata | null, nullable: boolean)
    {
        return {
            type: "array",
            items: schema(metadata),
            nullable
        };
    }

    /* -----------------------------------------------------------
        COMPONENTS
    ----------------------------------------------------------- */
    export function components(storage: IMetadata.IStorage | null)
    {
        const schemas: Record<string, any> = {};
        for (const [key, value] of Object.entries(storage || []))
            schemas[key] = generate_object(value);

        return { schemas };
    }

    function generate_object(obj: IMetadata.IObject)
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
            type: "object",
            properties,
            nullable: obj.nullable,
            required
        };
    }
}