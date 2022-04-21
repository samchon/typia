export interface IMetadata
{
    atomics: Set<string>;
    arraies: Map<string, IMetadata|null>;
    objects: Set<string>;
    nullable: boolean;
    required: boolean;
}
export namespace IMetadata
{
    export interface IObject
    {
        properties: Record<string, IMetadata | null>;
        nullable: boolean;
    }

    export interface IApplication
        extends IMetadata
    {
        storage: IStorage;
    }
    export type IStorage = Record<string, IMetadata.IObject>;
}