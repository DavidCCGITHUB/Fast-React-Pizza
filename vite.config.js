import eslint from 'vite-plugin-eslint';

export default {
  plugins: [process.env.NODE_ENV !== 'production' && eslint()].filter(Boolean),
};
