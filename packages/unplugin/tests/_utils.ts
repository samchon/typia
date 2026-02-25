import fs from 'node:fs/promises';
import { $ } from 'dax-sh';
import { resolve } from 'pathe';
import type { ID, Source } from '../src/core/types.js';

export const root: string = resolve(__dirname, 'fixtures');

export function getFixtureID(id: string): ID {
	return resolve(root, id) as ID;
}

export function getSnapshotID(_id: string, ext: string = 'js'): ID {
	const id = _id.replace(/\.ts$/, `.${ext}`);
	return resolve(root, '__snapshots__', id) as ID;
}

export async function readFixture(id: string): Promise<Source> {
	const _id = getFixtureID(id);
	return await fs.readFile(_id, 'utf-8') as Source;
}

export async function getFixtureIDs(): Promise<ID[]> {
	const ids = await $`ls ${root}`.lines().then(lines => lines.filter(line => line.endsWith('.ts')));
	return ids as ID[];
}
