const isProduction = process.env.NODE_ENV === 'production';

export { isProduction };

export let ropstenStorageFactory = '0x2e3794A43782677ED7f93a3C492Ed3C959d67033';
export let mainnetStorageFactory = '0x5Bd0ecfb4F008f4d0327d34878a89892e97c098F';

export * from './testrpc';
