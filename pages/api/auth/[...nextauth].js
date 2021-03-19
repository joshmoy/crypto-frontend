import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import Axios from "../../../queries/axios.config";

export default NextAuth({
  providers: [
    Providers.Credentials({
      async authorize({ login_details, password }) {
        const { data } = await Axios.post("users/login", { login_details, password });

        if (data) {
          const token = data.data.token;
          Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          const user = { ...data.data, token };
          return user;
        }

        throw "/auth";
      },
    }),
  ],
  callbacks: {
    jwt: async (token, user) => {
      user && (token.user = user);
      return token;
    },
    session: async (session, user) => {
      session.user = user.user;
      return session;
    },
  },
});
