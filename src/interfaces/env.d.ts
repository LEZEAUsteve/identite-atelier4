declare namespace NodeJS {
    interface ProcessEnv {
      readonly DATABASE_URL: string
      readonly NODE_ENV:string
      readonly API_KEY:string
    }
  }