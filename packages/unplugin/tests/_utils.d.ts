import type { ID, Source } from '../src/core/types.js';
export declare const root: string;
export declare function getFixtureID(id: string): ID;
export declare function getSnapshotID(_id: string, ext?: string): ID;
export declare function readFixture(id: string): Promise<Source>;
export declare function getFixtureIDs(): Promise<ID[]>;
