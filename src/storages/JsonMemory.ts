import faster from "fast-json-stringify";

export namespace JsonMemory
{
    export function stringify
        (
            key: string, 
            closure: () => [object, object]
        ): (input: any) => string
    {
        return dict.get(key) ?? insert(key, closure);
    }

    function insert(key: string, closure: () => [object, object]): (input: any) => string
    {
        const [schema, storage] = closure();
        const value = faster(schema as any, { schema: storage as any });
        dict.set(key, value);
        return value;
    }

    const dict: Map<string, (input: any) => string> = new Map();
}