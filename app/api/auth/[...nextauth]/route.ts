import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google"


const handler=NextAuth({
  providers : [
    GithubProvider({
      clientId : process.env.GITHUB_CLIENTID ?? "",
      clientSecret : process.env.GITHUB_CLIENTSECRET ?? ""
    })
  ]
})
export  {handler as GET , handler as POST}