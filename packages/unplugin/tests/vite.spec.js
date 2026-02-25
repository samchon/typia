import { build } from 'vite';
import path from 'pathe';
import { $ } from 'dax-sh';
import UnpluginInlineTypia from '../src/vite.js';
import { getFixtureID, getFixtureIDs, getSnapshotID, root } from './_utils.js';
async function transform(_id) {
    const id = getFixtureID(_id);
    const { output } = (await build({
        root,
        build: {
            minify: false,
            rollupOptions: {
                input: [id],
                external: ['typia'],
            },
            write: false,
        },
        logLevel: 'silent',
        plugins: [
            UnpluginInlineTypia({
                cache: false,
                log: false,
            }),
        ],
        resolve: {
            alias: {
                '@': path.resolve('./tests/fixtures'),
            },
        },
    }));
    return output;
}
it.each(await getFixtureIDs())(`vite transform %s`, async (id) => {
    const transformed = await transform(id);
    const code = transformed[0].code;
    const snapshot = getSnapshotID(id).replace('__snapshots__', '__snapshots__/vite');
    await expect(code).toMatchFileSnapshot(snapshot);
    await $ `node ${snapshot}`;
});
