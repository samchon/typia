import fs from 'node:fs/promises';
import { $ } from 'dax-sh';
import { resolve } from 'pathe';
export const root = resolve(__dirname, 'fixtures');
export function getFixtureID(id) {
    return resolve(root, id);
}
export function getSnapshotID(_id, ext = 'js') {
    const id = _id.replace(/\.ts$/, `.${ext}`);
    return resolve(root, '__snapshots__', id);
}
export async function readFixture(id) {
    const _id = getFixtureID(id);
    return await fs.readFile(_id, 'utf-8');
}
export async function getFixtureIDs() {
    const ids = await $ `ls ${root}`.lines().then(lines => lines.filter(line => line.endsWith('.ts')));
    return ids;
}
