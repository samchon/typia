import { $ } from 'dax-sh';
import { build } from 'esbuild';
import UnpluginInlineTypia from '../src/esbuild.js';
import { getFixtureID, getFixtureIDs, getSnapshotID } from './_utils.js';
async function transform(_id) {
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
it.each(await getFixtureIDs())(`esbuild transform %s`, async (id) => {
    const transformed = await transform(id);
    const snapshot = getSnapshotID(id).replace('__snapshots__', '__snapshots__/esbuild');
    await expect(transformed).toMatchFileSnapshot(snapshot);
    await $ `node ${snapshot}`;
});
