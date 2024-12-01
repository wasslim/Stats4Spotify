// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth, { DefaultSession } from "next-auth";
declare module "next-auth" {
  /** Extending the default Session interface */
  interface Session {
    accessToken?: string;
  }
}
