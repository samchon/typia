export interface IMetadata
{
    atomics: Set<string>;
    arraies: Map<string, IMetadata|null>;
    objects: Set<string>;
    nullable: boolean;
    required: boolean;
    description?: string;
}
export namespace IMetadata
{
    export interface IObject
    {
        $id: string;
        properties: Record<string, IMetadata | null>;
        nullable: boolean;
        description?: string;
    }

    export interface IApplication
    {
        metadata: IMetadata;
        storage: IStorage;
    }
    export type IStorage = Record<string, IMetadata.IObject>;
}