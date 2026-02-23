import { $ } from 'dax-sh';

import path from 'pathe';
import type { UnpluginBuildContext, UnpluginContext } from 'unplugin';
import { transformTypia } from '../src/core/typia.js';
import { resolveOptions } from '../src/api.js';
import type { Data } from '../src/core/types.js';
import { getFixtureID, getFixtureIDs, getSnapshotID, readFixture } from './_utils.js';

class DummyContext {
	warn(args: unknown) {
		console.warn(args);
	}
};

const ctx = new DummyContext() as UnpluginContext & UnpluginBuildContext;

async function _test(_id: string): Promise<Data> {
	const id = getFixtureID(_id);
	const code = await readFixture(_id);
	const transformed = await transformTypia(
		id,
		code,
		ctx,
		resolveOptions({ cache: false }),
		[{ find: '@', replacement: path.resolve('./tests/fixtures') }],
	);
	return transformed;
}

it.each(await getFixtureIDs())(`typia transform %s`, async (id: string) => {
	const transformed = await _test(id);
	const snapshot = getSnapshotID(id, 'ts');
	await expect(transformed).toMatchFileSnapshot(snapshot);
	await $`bun ${snapshot}`;
});
