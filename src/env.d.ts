/// <reference path="../.astro/types.d.ts" />
interface ImportMetaEnv {
  readonly API_URL: string;
  readonly APP_NAME: string;
  readonly APP_SHORT_VERSION: string;
  readonly APP_VERSION: string;
  readonly APP_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
