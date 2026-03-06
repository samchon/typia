import { build } from 'esbuild';

import UnpluginInlineTypia from '@typia/unplugin/esbuild';
import { getFixtureID, getFixtureIDs, getSnapshotID, executeSnapshot } from './_utils.js';

async function transform(_id: string) {
	const id = getFixtureID(_id);
	const result = await build({
		entryPoints: [id],
		bundle: false,
		write: false,
		format: 'esm',
		plugins: [
			UnpluginInlineTypia({
				cache: false,
				log: false,
			}),
		],
	});
	return result.outputFiles[0].text;
}

it.each(await getFixtureIDs())(`esbuild transform %s`, async (id: string) => {
	const transformed = await transform(id);
	const snapshot = getSnapshotID(id).replace('__snapshots__', '__snapshots__/esbuild');
	await expect(transformed).toMatchFileSnapshot(snapshot);
	await executeSnapshot(snapshot);
});
