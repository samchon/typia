import { $ } from 'dax-sh';
import path from 'pathe';
import { transformTypia } from '../src/core/typia.js';
import { resolveOptions } from '../src/api.js';
import { getFixtureID, getFixtureIDs, getSnapshotID, readFixture } from './_utils.js';
class DummyContext {
    warn(args) {
        console.warn(args);
    }
}
;
const ctx = new DummyContext();
async function _test(_id) {
    const id = getFixtureID(_id);
    const code = await readFixture(_id);
    const transformed = await transformTypia(id, code, ctx, resolveOptions({ cache: false }), [{ find: '@', replacement: path.resolve('./tests/fixtures') }]);
    return transformed;
}
it.each(await getFixtureIDs())(`typia transform %s`, async (id) => {
    const transformed = await _test(id);
    const snapshot = getSnapshotID(id, 'ts');
    await expect(transformed).toMatchFileSnapshot(snapshot);
    await $ `bun ${snapshot}`;
});
