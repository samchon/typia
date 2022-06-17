import { MapUtil } from "../utils/MapUtil";

export interface IMetadata {
    any: boolean;
    resolved: IMetadata | null;
    constants: Map<string, Set<string | number | boolean | bigint>>;
    atomics: Set<string>;
    arraies: Map<string, IMetadata>;
    tuples: Map<string, Array<IMetadata>>;
    objects: Map<string, [IMetadata.IObject, boolean]>;
    nullable: boolean;
    required: boolean;
    description?: string;
}
export namespace IMetadata {
    export interface IObject {
        $id: string;
        recursive: boolean;
        properties: Record<string, IMetadata>;
        description?: string;

        /**
         * @internal
         */
        validated: boolean;
    }
    export type IStorage = Record<string, IMetadata.IObject>;

    /**
     * @internal
     */
    export function create(): IMetadata {
        return {
            any: false,
            resolved: null,
            constants: new Map(),
            atomics: new Set(),
            arraies: new Map(),
            tuples: new Map(),
            objects: new Map(),
            nullable: false,
            required: true,
        };
    }

    /**
     * @internal
     */
    export function size(meta: IMetadata): number {
        const constants: number = [...meta.constants.keys()].filter(
            (key) => meta.atomics.has(key) === false,
        ).length;

        return (
            (meta.resolved !== null ? 1 : 0) +
            constants +
            meta.atomics.size +
            meta.arraies.size +
            meta.tuples.size +
            meta.objects.size
        );
    }

    /**
     * @internal
     */
    export function empty(meta: IMetadata): boolean {
        return size(meta) === 0;
    }

    /**
     * @internal
     */
    export function merge(x: IMetadata, y: IMetadata): IMetadata {
        // MERGE CONSTANTS
        const constants: Map<
            string,
            Set<string | number | boolean | bigint>
        > = new Map();
        for (const [type, set] of x.constants)
            constants.set(type, new Set([...set]));
        for (const [type, set] of y.constants) {
            const target = MapUtil.take(constants, type, () => new Set());
            for (const elem of set) target.add(elem);
        }

        return {
            any: x.any || y.any,
            constants,
            resolved:
                x.resolved !== null && y.resolved !== null
                    ? merge(x.resolved, y.resolved)
                    : x.resolved || y.resolved,
            atomics: new Set([...x.atomics, ...y.atomics]),
            arraies: new Map([...x.arraies, ...y.arraies]),
            tuples: new Map([...x.tuples, ...y.tuples]),
            objects: new Map([...x.objects, ...y.objects]),
            nullable: x.nullable || y.nullable,
            required: x.required && y.required,
        };
    }

    /**
     * @internal
     */
    export function separate(input: Partial<IMetadata>): IMetadata {
        return {
            ...create(),
            ...input,
        };
    }
}
