export default function App() {
  return (
    <div className="h-screen bg-green-600 text-white flex items-center justify-center text-3xl">
      Hello World com Tailwind!
    </div>
  );
}

// 8. Adiciona Vite config com base para GitHub Pages
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  base: "/imoveis", // <-- MUITO IMPORTANTE!
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});