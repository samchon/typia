import { RollupEsbuildPlugin, rollupBuild } from '@vue-macros/test-utils';

import UnpluginInlineTypia from '@typia/unplugin/rollup';
import { getFixtureID, getFixtureIDs, getSnapshotID, executeSnapshot } from './_utils.js';

async function transform(_id: string) {
	const id = getFixtureID(_id);
	const result = await rollupBuild(
		id,
		[
			UnpluginInlineTypia({
				cache: false,
				log: false,
			}),
			RollupEsbuildPlugin(),
			{
				name: 'test:mod-options',
				options(options) {
					options.treeshake = 'smallest';
				},
			},

		],
	);
	return result;
}

it.each(await getFixtureIDs())(`rollup transform %s`, async (id: string) => {
	const transformed = await transform(id);
	const snapshot = getSnapshotID(id).replace('__snapshots__', '__snapshots__/rollup');
	await expect(transformed).toMatchFileSnapshot(snapshot);
	await executeSnapshot(snapshot);
});
