export interface ISchema
{
    atomics: Set<string>;
    arraies: Map<string, ISchema|null>;
    objects: Set<string>;
    nullable: boolean;
}
export namespace ISchema
{
    export interface IObject
    {
        properties: Record<string, ISchema | null>;
        nullable: boolean;
    }

    export interface IApplication
        extends ISchema
    {
        storage: IStorage;
    }
    export type IStorage = Record<string, ISchema.IObject>;
}