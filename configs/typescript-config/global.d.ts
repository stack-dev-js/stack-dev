// env.d.ts
declare module '*.module.css' {
  const classes: Record<string, string>;
  export default classes;
  export = classes;
}

declare module '*.css' {
  const content: string;
  export default content;
  export = content;
}