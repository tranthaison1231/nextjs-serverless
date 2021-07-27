declare namespace NodeJS {
  export interface ProcessEnv {
    BASE_URL: string;
    SENTRY_DSN: string;
    NEXT_PUBLIC_BASE_URL: string;
  }
}

declare module '*.svg' {
  const content: React.ComponentType<
    CustomIconComponentProps | React.SVGProps<SVGSVGElement>
  >;
  export default content;
}
