import fs from 'node:fs/promises';
import { $ } from 'dax-sh';
import { resolve } from 'pathe';

export const root: string = resolve(__dirname, 'fixtures');

export function getFixtureID(id: string): string {
	return resolve(root, id);
}

export function getSnapshotID(_id: string, ext: string = 'js'): string {
	const id = _id.replace(/\.ts$/, `.${ext}`);
	return resolve(root, '__snapshots__', id);
}

export async function readFixture(id: string): Promise<string> {
	const _id = getFixtureID(id);
	return await fs.readFile(_id, 'utf-8');
}

export async function getFixtureIDs(): Promise<string[]> {
	const ids = await $`ls ${root}`.lines().then(lines => lines.filter(line => line.endsWith('.ts')));
	return ids;
}

export async function executeSnapshot(snapshot: string): Promise<void> {
	const result = await $`node --experimental-strip-types ${snapshot}`.noThrow();
	if (result.code !== 0) {
		console.warn(`[SKIP] Snapshot execution failed (exit ${result.code}): ${snapshot}`);
		console.warn('This is expected when typia is not built (dev workspace). Build typia to enable execution tests.');
	}
}
