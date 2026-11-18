/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_JAAM_FORMS_BASE_URL: string;
  readonly VITE_JAAM_FORM_ID: string;
  readonly VITE_JAAM_TURNSTILE_SITE_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
